import nodemailer from "nodemailer";
import type { CheckoutFormData } from "@/app/checkout/page";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface OrderEmailData {
  formData: CheckoutFormData;
  items: Array<{
    name: string;
    price: number;
    amount: number;
    imageUrl?: string;
  }>;
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
  orderId: string;
}

export async function sendOrderMail(orderData: OrderEmailData) {
  const { formData, items, subtotal, shipping, vat, grandTotal, orderId } =
    orderData;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="background-color: #D87D4A; padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; letter-spacing: 2px;">AUDIOPHILE</h1>
                  </td>
                </tr>
                
                <!-- Greeting -->
                <tr>
                  <td style="padding: 40px 30px 20px;">
                    <h2 style="margin: 0 0 10px; color: #000000; font-size: 24px; font-weight: bold;">Thank you, ${formData.name}! 🎧</h2>
                    <p style="margin: 0; color: #666666; font-size: 16px; line-height: 1.5;">Your order has been confirmed and will be shipping soon.</p>
                  </td>
                </tr>
                
                <!-- Order ID -->
                <tr>
                  <td style="padding: 0 30px 30px;">
                    <table width="100%" cellpadding="15" cellspacing="0" style="background-color: #f9f9f9; border-radius: 6px;">
                      <tr>
                        <td>
                          <p style="margin: 0; color: #666666; font-size: 14px;">Order ID</p>
                          <p style="margin: 5px 0 0; color: #000000; font-size: 18px; font-weight: bold;">${orderId}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Order Items -->
                <tr>
                  <td style="padding: 0 30px 20px;">
                    <h3 style="margin: 0 0 20px; color: #000000; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Order Summary</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${items
                        .map(
                          (item) => `
                      <tr>
                        <td style="padding: 15px 0; border-bottom: 1px solid #f0f0f0;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width: 80%; vertical-align: middle;">
                                <p style="margin: 0; color: #000000; font-size: 16px; font-weight: 600;">${item.name}</p>
                                <p style="margin: 5px 0 0; color: #D87D4A; font-size: 14px; font-weight: bold;">$${item.price.toLocaleString()}</p>
                              </td>
                              <td style="width: 20%; text-align: right; vertical-align: middle;">
                                <p style="margin: 0; color: #666666; font-size: 16px; font-weight: bold;">x${item.amount}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      `
                        )
                        .join("")}
                    </table>
                  </td>
                </tr>
                
                <!-- Order Totals -->
                <tr>
                  <td style="padding: 20px 30px;">
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #666666; font-size: 15px; text-transform: uppercase;">Subtotal</td>
                        <td align="right" style="color: #000000; font-size: 16px; font-weight: bold;">$${subtotal.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td style="color: #666666; font-size: 15px; text-transform: uppercase;">Shipping</td>
                        <td align="right" style="color: #000000; font-size: 16px; font-weight: bold;">$${shipping.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td style="color: #666666; font-size: 15px; text-transform: uppercase; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">VAT (Included)</td>
                        <td align="right" style="color: #000000; font-size: 16px; font-weight: bold; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">$${vat.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td style="color: #666666; font-size: 15px; text-transform: uppercase; padding-top: 15px;">Grand Total</td>
                        <td align="right" style="color: #D87D4A; font-size: 20px; font-weight: bold; padding-top: 15px;">$${grandTotal.toLocaleString()}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Shipping Information -->
                <tr>
                  <td style="padding: 20px 30px; background-color: #f9f9f9;">
                    <h3 style="margin: 0 0 15px; color: #000000; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Shipping Details</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 5px 0;">
                          <p style="margin: 0; color: #000000; font-size: 15px;">${formData.address}</p>
                          <p style="margin: 5px 0; color: #000000; font-size: 15px;">${formData.city}, ${formData.zipCode}</p>
                          <p style="margin: 0; color: #000000; font-size: 15px;">${formData.country}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Contact Information -->
                <tr>
                  <td style="padding: 20px 30px;">
                    <h3 style="margin: 0 0 15px; color: #000000; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Contact Information</h3>
                    <p style="margin: 0 0 8px; color: #666666; font-size: 14px;">
                      <strong style="color: #000000;">Email:</strong> ${formData.email}
                    </p>
                    <p style="margin: 0; color: #666666; font-size: 14px;">
                      <strong style="color: #000000;">Phone:</strong> ${formData.phone}
                    </p>
                  </td>
                </tr>
                
                <!-- Payment Method -->
                <tr>
                  <td style="padding: 20px 30px 40px;">
                    <h3 style="margin: 0 0 15px; color: #000000; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Payment Method</h3>
                    <p style="margin: 0; color: #666666; font-size: 14px;">
                      <strong style="color: #000000;">${formData.paymentMethod}</strong>
                      ${
                        formData.paymentMethod === "e-Money" &&
                        formData.eMoneyNumber
                          ? `<br><span style="color: #999;">•••• •••• ${formData.eMoneyNumber.slice(-3)}</span>`
                          : ""
                      }
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 30px; background-color: #000000; text-align: center;">
                    <p style="margin: 0 0 10px; color: #ffffff; font-size: 14px;">Thank you for choosing Audiophile</p>
                    <p style="margin: 0; color: #999999; font-size: 12px;">If you have any questions, please contact our support team.</p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"Audiophile Store" <${process.env.EMAIL_USER}>`,
    to: formData.email,
    subject: `Order Confirmation - ${orderId}`,
    html,
  });
}
