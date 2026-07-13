// ============================================================
// Cloudflare Worker — Portfolio Contact Form (Resend API)
// Deploy to: https://portifolioemail.eduarido1432.workers.dev
// ============================================================

const RESEND_API_KEY = 're_5VxjAEnk_8QXRz6nWokrQgQhyfLeogbyu';
const TO_EMAIL = 'eduardorm.dev@gmail.com';
const FROM_EMAIL = 'onboarding@resend.dev'; // Change to your verified domain later

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept'
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export default {
  async fetch(request) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ success: false, error: 'Method not allowed' }, 405);
    }

    try {
      const { name, email, subject, message } = await request.json();

      // Validate required fields
      if (!name || !email || !message) {
        return jsonResponse({ success: false, error: 'Missing required fields (name, email, message)' }, 400);
      }

      // Simple email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return jsonResponse({ success: false, error: 'Invalid email format' }, 400);
      }

      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeSubject = escapeHtml(subject || 'Portfolio Contact');
      const safeMessage = escapeHtml(message);

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          replyTo: email,
          subject: `[Portfolio] ${safeSubject} — from ${safeName}`,
          html: `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #0e9f6e, #34d399); padding: 20px 24px; border-radius: 12px 12px 0 0;">
                <h2 style="margin: 0; color: #fff; font-size: 18px;">New message from your portfolio</h2>
              </div>
              <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; width: 90px; color: #374151; font-size: 14px;">Name:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; font-size: 14px;">Email:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #0e9f6e;">${safeEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; font-size: 14px;">Subject:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;">${safeSubject}</td>
                  </tr>
                </table>
                <div style="background: #fff; padding: 16px 20px; border-radius: 8px; border-left: 4px solid #0e9f6e; box-shadow: 0 1px 3px rgba(0,0,0,.06);">
                  <p style="margin: 0; line-height: 1.7; white-space: pre-wrap; color: #374151; font-size: 14px;">${safeMessage}</p>
                </div>
              </div>
              <p style="margin-top: 16px; font-size: 12px; color: #9ca3af; text-align: center;">Sent from Eduardo Roberto's portfolio</p>
            </div>
          `
        })
      });

      const data = await resendResponse.json();

      if (resendResponse.ok) {
        return jsonResponse({ success: true, id: data.id });
      } else {
        console.error('Resend error:', data);
        return jsonResponse({ success: false, error: data.message || data.name || 'Failed to send email' }, resendResponse.status);
      }
    } catch (err) {
      console.error('Worker error:', err);
      return jsonResponse({ success: false, error: 'Internal server error' }, 500);
    }
  }
};