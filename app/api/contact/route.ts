import {
  NextRequest,
  NextResponse,
} from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  organisation?: string;
  enquiry?: string;
  subject?: string;
  message?: string;
  website?: string;
};

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const enquiryLabels: Record<
  string,
  string
> = {
  technology: "Technology opportunity",
  "product-venture": "Product or venture",
  research: "Research collaboration",
  partnership: "Partnership",
  careers: "Careers & collaboration",
  general: "General enquiry",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(
  request: NextRequest,
) {
  try {
    const resendApiKey =
      process.env.RESEND_API_KEY;

    const toEmail =
      process.env.CONTACT_TO_EMAIL;

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey) {
      console.error(
        "Missing RESEND_API_KEY",
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Email delivery is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    if (!toEmail || !fromEmail) {
      console.error(
        "Missing contact email configuration",
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Contact delivery is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    /*
     * Create the Resend client only when
     * the API route is actually called.
     *
     * This prevents Next.js from trying
     * to initialise Resend during build.
     */
    const resend = new Resend(
      resendApiKey,
    );

    const body =
      (await request.json()) as ContactPayload;

    const name =
      body.name?.trim() ?? "";

    const email =
      body.email?.trim() ?? "";

    const organisation =
      body.organisation?.trim() ?? "";

    const enquiry =
      body.enquiry?.trim() ?? "";

    const subject =
      body.subject?.trim() ?? "";

    const message =
      body.message?.trim() ?? "";

    /*
     * Honeypot field.
     *
     * Bots may fill this hidden field.
     * Return success so they do not know
     * the submission was rejected.
     */
    if (body.website?.trim()) {
      return NextResponse.json({
        success: true,
        message:
          "Your enquiry has been sent successfully.",
      });
    }

    if (
      !name ||
      !email ||
      !enquiry ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please complete all required fields.",
        },
        {
          status: 400,
        },
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      name.length > 120 ||
      email.length > 200 ||
      organisation.length > 200 ||
      enquiry.length > 80 ||
      subject.length > 250 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "One or more fields are too long.",
        },
        {
          status: 400,
        },
      );
    }

    const enquiryLabel =
      enquiryLabels[enquiry] ?? enquiry;

    const safeName =
      escapeHtml(name);

    const safeEmail =
      escapeHtml(email);

    const safeOrganisation =
      escapeHtml(
        organisation || "Not provided",
      );

    const safeEnquiry =
      escapeHtml(enquiryLabel);

    const safeSubject =
      escapeHtml(subject);

    const safeMessage =
      escapeHtml(message).replaceAll(
        "\n",
        "<br />",
      );

    const { data, error } =
      await resend.emails.send({
        from: fromEmail,

        to: [toEmail],

        replyTo: email,

        subject: `[Evolvaer] ${subject}`,

        html: `
          <!doctype html>
          <html>
            <head>
              <meta charset="utf-8" />

              <meta
                name="viewport"
                content="width=device-width"
              />
            </head>

            <body
              style="
                margin:0;
                padding:0;
                background:#f5f2eb;
                color:#0D1B2A;
                font-family:
                  Arial,
                  Helvetica,
                  sans-serif;
              "
            >
              <div
                style="
                  width:100%;
                  padding:40px 20px;
                  box-sizing:border-box;
                "
              >
                <div
                  style="
                    max-width:680px;
                    margin:0 auto;
                    background:#ffffff;
                    border-radius:24px;
                    overflow:hidden;
                    border:1px solid
                      rgba(13,27,42,.08);
                  "
                >
                  <div
                    style="
                      background:#0D1B2A;
                      padding:36px;
                    "
                  >
                    <div
                      style="
                        color:#F4A62A;
                        font-size:11px;
                        letter-spacing:3px;
                        text-transform:uppercase;
                        font-weight:700;
                      "
                    >
                      Evolvaer Technologies
                    </div>

                    <h1
                      style="
                        margin:16px 0 0;
                        color:#ffffff;
                        font-family:
                          Georgia,
                          'Times New Roman',
                          serif;
                        font-size:34px;
                        line-height:1.1;
                        font-weight:500;
                      "
                    >
                      New website enquiry
                    </h1>
                  </div>

                  <div
                    style="
                      padding:36px;
                    "
                  >
                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        border-collapse:
                          collapse;
                      "
                    >
                      <tr>
                        <td
                          style="
                            padding:
                              0 0 18px;
                            color:#64748B;
                            font-size:12px;
                            text-transform:
                              uppercase;
                            letter-spacing:
                              1.5px;
                          "
                        >
                          Name
                        </td>

                        <td
                          align="right"
                          style="
                            padding:
                              0 0 18px;
                            font-size:15px;
                          "
                        >
                          ${safeName}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding:
                              18px 0;
                            border-top:
                              1px solid #eeeae2;
                            color:#64748B;
                            font-size:12px;
                            text-transform:
                              uppercase;
                            letter-spacing:
                              1.5px;
                          "
                        >
                          Email
                        </td>

                        <td
                          align="right"
                          style="
                            padding:
                              18px 0;
                            border-top:
                              1px solid #eeeae2;
                            font-size:15px;
                          "
                        >
                          ${safeEmail}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding:
                              18px 0;
                            border-top:
                              1px solid #eeeae2;
                            color:#64748B;
                            font-size:12px;
                            text-transform:
                              uppercase;
                            letter-spacing:
                              1.5px;
                          "
                        >
                          Organisation
                        </td>

                        <td
                          align="right"
                          style="
                            padding:
                              18px 0;
                            border-top:
                              1px solid #eeeae2;
                            font-size:15px;
                          "
                        >
                          ${safeOrganisation}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding:
                              18px 0;
                            border-top:
                              1px solid #eeeae2;
                            color:#64748B;
                            font-size:12px;
                            text-transform:
                              uppercase;
                            letter-spacing:
                              1.5px;
                          "
                        >
                          Enquiry
                        </td>

                        <td
                          align="right"
                          style="
                            padding:
                              18px 0;
                            border-top:
                              1px solid #eeeae2;
                            font-size:15px;
                          "
                        >
                          ${safeEnquiry}
                        </td>
                      </tr>
                    </table>

                    <div
                      style="
                        margin-top:30px;
                        padding-top:26px;
                        border-top:
                          1px solid #eeeae2;
                      "
                    >
                      <div
                        style="
                          color:#F4A62A;
                          font-size:11px;
                          font-weight:700;
                          letter-spacing:2px;
                          text-transform:
                            uppercase;
                        "
                      >
                        Subject
                      </div>

                      <h2
                        style="
                          margin:
                            10px 0 0;
                          font-family:
                            Georgia,
                            'Times New Roman',
                            serif;
                          font-size:24px;
                          line-height:1.25;
                          font-weight:500;
                        "
                      >
                        ${safeSubject}
                      </h2>
                    </div>

                    <div
                      style="
                        margin-top:28px;
                        padding:24px;
                        border-radius:18px;
                        background:#f8f6f1;
                        line-height:1.7;
                        font-size:15px;
                      "
                    >
                      ${safeMessage}
                    </div>

                    <p
                      style="
                        margin:
                          28px 0 0;
                        color:#64748B;
                        font-size:12px;
                        line-height:1.6;
                      "
                    >
                      Reply directly to this
                      email to respond to
                      ${safeName}.
                    </p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      });

    if (error) {
      console.error(
        "Resend contact error:",
        error,
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "We could not send your enquiry. Please try again.",
        },
        {
          status: 502,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your enquiry has been sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error(
      "Contact route error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to process your enquiry.",
      },
      {
        status: 500,
      },
    );
  }
}