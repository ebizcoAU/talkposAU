// src/content.ts — every product claim on the site, in one place so it can be checked together.
//
// Only features in the current Australian app are listed under "now". Planned work sits under
// "coming", with no dates. Prices and trial terms are not published yet, so none appear here.

export const CONTACT_EMAIL = 'admin@ebizco.com.au'
export const PILOT_MAILTO =
  'mailto:admin@ebizco.com.au?subject=TalkPOS%20Canberra%20pilot'

export const books =
  'Your sales and expenses, with their GST, kept in one place, ready for you or your accountant.'

export const pilot = {
  button: 'Join the Canberra pilot',
  lead: 'We’re starting with a small pilot in Canberra.',
  note: 'Email us your name, venue and suburb. We’ll use them only to contact you about the TalkPOS pilot. If you don’t join, we delete your email when the pilot closes to new venues, or within 12 months at the latest. If you join, the TalkPOS privacy notice covers you from then on.',
}

export type Item = { icon: string; title: string; body: string }

// Available today in the Australian app.
export const now: Item[] = [
  { icon: '🧮', title: 'The till', body: 'Big, clear buttons. One tap per item, and each screen does one job.' },
  { icon: '🍳', title: 'Kitchen and customer screens', body: 'Orders go straight to the kitchen screen, and customers can see when their order is ready.' },
  { icon: '🙋', title: 'Self-order kiosk', body: 'Customers can order for themselves on a tablet at the counter.' },
  { icon: '📱', title: 'Waiter tablet', body: 'Take orders at the table, with a view of your whole floor.' },
  { icon: '📦', title: 'Stock', body: 'Track stock, from raw materials to finished items, with stock counts and stock-in.' },
  { icon: '🔐', title: 'Venue PIN', body: 'A venue PIN locks the till on shared devices.' },
  { icon: '📒', title: 'Books in one place', body: books },
  { icon: '📶', title: 'Your devices, working together', body: 'Phones and tablets on your shop Wi-Fi pair with a QR code. Give each one a job: register, waiter, kiosk or kitchen.' },
]

// Coming. No dates, no "replaces your accountant / payroll provider".
export const coming: Item[] = [
  { icon: '🗓️', title: 'Rosters in TalkKim', body: 'Your staff see their shifts in the TalkKim app, and you and your team sort out changes and swaps with Kim’s help.' },
  { icon: '💵', title: 'Payroll and payslips', body: 'Pay runs with PAYG withholding and super worked out, and each staff member gets their payslip in TalkKim.' },
  { icon: '🔁', title: 'Xero and MYOB import/export', body: 'Export your sales and expenses to Xero or MYOB, and bring your figures across when you switch, so your accountant can keep using what they use.' },
  { icon: '🏛️', title: 'ATO reporting', body: 'We’re working towards becoming an ATO digital service provider, so that later you can send your own reports to the ATO from TalkPOS. TalkPOS doesn’t connect to the ATO today.' },
]

export type Faq = { q: string; a: string }

export const faq: Faq[] = [
  { q: 'What kind of business is TalkPOS for?', a: 'Food and drink: cafés, takeaways, bakeries and small restaurants.' },
  { q: 'Do I need to be good with computers?', a: 'No. The buttons are big and clear, and each screen does one job.' },
  { q: 'What do I need to run it?', a: 'An Android phone or tablet, or an iPhone or iPad. For more than one device, they all join your shop Wi-Fi.' },
  { q: 'How do customers pay?', a: 'With your own card terminal or cash, like now. You mark the order paid on the till. Your customers’ payments go straight to you, not through us.' },
  { q: 'Does it do my BAS or replace my accountant?', a: 'No. TalkPOS keeps your sales and expenses, with their GST, in one place. You or your accountant check them and lodge.' },
  { q: 'Does it do payroll or rosters?', a: 'Not yet. Rosters and payroll are coming, with your staff using the TalkKim app for their shifts and payslips.' },
  { q: 'How much does it cost?', a: 'Pricing is coming soon. Pilot venues hear it first, with notice before any charge starts.' },
  { q: 'When can I get it?', a: 'We’re starting with a small pilot in Canberra. Email us and we’ll be in touch.' },
]
