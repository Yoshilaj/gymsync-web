import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service — GymSync',
  description: 'The terms that govern your use of GymSync.',
};

const EFFECTIVE_DATE = 'August 1, 2026';
const LAST_UPDATED = 'August 1, 2026';

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service for GymSync" effectiveDate={EFFECTIVE_DATE} lastUpdated={LAST_UPDATED}>
      <p>
        Please read these Terms of Service (&quot;Terms&quot;) carefully before using GymSync
        (&quot;the App&quot;), operated by Yoshiharu Nishikawahara (&quot;we,&quot; &quot;our,&quot;
        &quot;us,&quot; or &quot;GymSync&quot;).
      </p>
      <p>
        By downloading, installing, or using GymSync, you agree to be bound by these Terms. If you
        do not agree, do not use the App. Section 15 below contains an arbitration agreement and
        class action waiver that affects your legal rights — please read it carefully.
      </p>

      <h2>1. Acceptance of Terms; Eligibility</h2>
      <p>
        By accessing or using GymSync, you confirm that you are at least 13 years of age (or the
        minimum age required in your jurisdiction), and that you have the legal capacity to agree
        to these Terms. If you are using the App on behalf of an organization, you represent that
        you have authority to bind that organization.
      </p>

      <h2>2. Changes to the App or These Terms</h2>
      <p>
        We may modify, update, or discontinue any feature or functionality of GymSync at any time,
        without liability, including changes required by our service providers (Apple, Supabase,
        Anthropic, Deepgram, or ElevenLabs).
      </p>
      <p>
        We may update these Terms from time to time. When we make material changes, we will update
        the &quot;Last Updated&quot; date above and, where reasonably practicable, notify you
        through the App. Continued use of GymSync after changes are posted constitutes acceptance
        of the updated Terms. If you disagree with a change, your only remedy is to stop using
        GymSync and delete your account.
      </p>

      <h2>3. License Grant</h2>
      <p>
        We grant you a limited, non-exclusive, non-transferable, revocable license to use GymSync
        on Apple devices that you own or control, subject to these Terms and the Apple Media
        Services Terms and Conditions.
      </p>

      <h2>4. Restrictions</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Copy, modify, or create derivative works of the App</li>
        <li>
          Reverse-engineer, decompile, or disassemble the App, except to the extent applicable law
          expressly permits this despite this restriction
        </li>
        <li>Rent, lease, lend, sell, sublicense, or otherwise commercially exploit the App</li>
        <li>
          Use any robot, spider, scraper, or other automated means to access, extract, or index
          data from the App
        </li>
        <li>Attempt to bypass or circumvent any security or access-control measure in the App</li>
        <li>
          Interfere with or disrupt the operation of the App, or place an unreasonable load on its
          infrastructure
        </li>
        <li>Upload or transmit any virus, malware, or other harmful code</li>
        <li>Remove or alter any proprietary notices in the App</li>
        <li>Use the App for any unlawful purpose</li>
      </ul>

      <h2>5. User Accounts</h2>
      <ul>
        <li>
          You are responsible for maintaining the confidentiality of your account credentials and
          for all activity under your account.
        </li>
        <li>
          You must provide accurate information when creating your account and maintain only one
          account for your own personal use.
        </li>
        <li>
          You must notify us promptly at support@gymsyncapp.me of any unauthorized use of your
          account.
        </li>
        <li>
          You may permanently delete your account and all associated data at any time via Settings
          → Account settings → Delete account. This action cannot be undone and account data
          generally cannot be recovered afterward.
        </li>
      </ul>
      <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>

      <h2>6. Fitness, Health, and AI Coaching Disclaimer — Please Read Carefully</h2>
      <p>
        GymSync provides general fitness guidance, workout plans, and AI-generated coaching.{' '}
        <strong>
          GymSync is not intended to diagnose, treat, cure, or prevent any disease or medical
          condition, and nothing in the App is medical advice.
        </strong>
      </p>
      <ul>
        <li>
          Consult a physician or qualified professional before starting any exercise program,
          especially if you have a pre-existing health condition, injury, or concern, or are
          pregnant.
        </li>
        <li>
          You are solely responsible for exercising safely, using proper form, and choosing
          weights and intensities appropriate to your own fitness level and physical condition.
        </li>
        <li>
          Stop immediately and seek medical attention if you experience pain, dizziness, chest
          discomfort, or any other concerning symptom during a workout.
        </li>
        <li>
          <strong>AI-generated content may contain errors.</strong> Coaching replies, generated
          workout plans, and any response the AI coach gives about injuries, pain, or physical
          limitations are generated by third-party AI systems (see our{' '}
          <Link href="/privacy-policy">Privacy Policy</Link>), are general in nature, may be
          inaccurate, and do not replace professional medical, physical therapy, or nutritional
          advice. Do not rely on the AI coach as your sole source of guidance for a health
          condition or injury.
        </li>
        <li>
          You assume all risk of injury, loss, or damage resulting from your use of GymSync and any
          workout plan, exercise, or coaching guidance it provides.
        </li>
      </ul>

      <h2>7. User Content</h2>
      <p>
        You retain ownership of the workout data, logs, profile photo, and messages you create
        within GymSync (&quot;User Content&quot;). By submitting User Content, you grant us a
        limited, non-exclusive, worldwide license to host, store, reproduce, and transmit your
        User Content — including sending relevant parts of it to our AI service providers (see our{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>) — solely to operate and provide
        GymSync&apos;s coaching features to you. This license ends when you delete the applicable
        content or your account, except for copies retained in routine backups for a limited
        period, which are then deleted in the ordinary course.
      </p>
      <p>
        You represent that you own or have the necessary rights to any User Content you submit
        (including any photo you upload), and that it does not infringe any third party&apos;s
        rights or violate any law.
      </p>
      <p>
        You agree not to submit content that is illegal, harmful, or infringes on the rights of
        others. We may remove User Content that violates these Terms.
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        GymSync, including its design, code, features, content, and branding, is owned by
        Yoshiharu Nishikawahara and protected by copyright, trademark, and other intellectual
        property laws. Except for the limited license in Section 3, these Terms do not grant you
        any rights to our intellectual property.
      </p>

      <h2>9. Subscriptions and Purchases</h2>
      <p>
        GymSync offers a free tier and two paid subscription tiers (Pro and Premium), purchased
        through the Apple App Store.
      </p>
      <h3>Pricing</h3>
      <ul>
        <li>
          Prices are displayed in your local currency through the App Store and may change with
          notice; existing subscribers will be notified before renewal at a new price.
        </li>
      </ul>
      <h3>Free Trial</h3>
      <ul>
        <li>
          New subscribers get a 7-day free trial. If not cancelled before the trial ends, the
          trial automatically converts into a paid subscription and payment begins.
        </li>
        <li>Trial eligibility is determined by Apple and limited to one trial per Apple ID.</li>
      </ul>
      <h3>Auto-Renewal</h3>
      <ul>
        <li>
          Subscriptions automatically renew (monthly or annually, depending on the plan you
          chose) unless cancelled at least 24 hours before the end of the current period.
        </li>
        <li>
          Your Apple ID account will be charged for renewal within 24 hours prior to the end of
          the current period.
        </li>
        <li>
          You can manage or cancel your subscription anytime in your Apple ID account settings, or
          via the &quot;Manage subscription&quot; link in GymSync&apos;s Settings. Deleting the App
          does not cancel your subscription.
        </li>
      </ul>
      <h3>Refunds</h3>
      <ul>
        <li>
          All purchases are billed and processed by Apple. Refund requests must be submitted
          through Apple: <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
          We do not process refunds directly.
        </li>
      </ul>

      <h2>10. Third-Party Services</h2>
      <p>
        GymSync relies on third-party services (Supabase, Anthropic, Deepgram, ElevenLabs, Sentry, Apple,
        and Google) to
        operate, as described in our <Link href="/privacy-policy">Privacy Policy</Link>. We are
        not responsible for the accuracy, availability, or performance of these third-party
        services, and your use of them (to the extent you interact with them directly) is subject
        to their own terms.
      </p>
      <p>
        These Terms govern the relationship between you and GymSync; they do not alter your
        relationship with Apple. Apple has no obligation to furnish maintenance or support for the
        App, and Apple is a third-party beneficiary of these Terms with the right to enforce them
        against you.
      </p>

      <h2>11. Copyright Complaints (DMCA)</h2>
      <p>
        If you believe content in GymSync infringes your copyright, send a notice to
        support@gymsyncapp.me including: (a) identification of the copyrighted work; (b)
        identification of the allegedly infringing material and its location in the App; (c) your
        contact information; (d) a statement that you have a good-faith belief the use is
        unauthorized; (e) a statement, under penalty of perjury, that the notice is accurate and
        that you are authorized to act on the copyright owner&apos;s behalf; and (f) your physical
        or electronic signature. We will respond to properly submitted notices in accordance with
        applicable law.
      </p>

      <h2>12. Termination</h2>
      <p>
        We may suspend or terminate your access to GymSync for violating these Terms, or for
        conduct that we determine is harmful to other users or to us.
      </p>
      <p>
        Upon termination, your license to use the App is revoked and we may delete your account
        and associated data. You may terminate your use at any time by deleting your account and
        the App.
      </p>

      <h2>13. Disclaimer of Warranties</h2>
      <p>
        GYMSYNC IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF
        ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>
      <p>
        We do not warrant that the App will be uninterrupted, error-free, or secure, that defects
        will be corrected, or that AI-generated coaching content, workout plans, or transcriptions
        will be accurate or suitable for your specific circumstances. You assume all risk arising
        from your use of, or inability to use, the App.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion of certain warranties, so some of the above
        exclusions may not apply to you.
      </p>

      <h2>14. Limitation of Liability; Indemnification</h2>
      <h3>Limitation of Liability</h3>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOSHIHARU NISHIKAWAHARA SHALL NOT BE
        LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES —
        INCLUDING BUT NOT LIMITED TO PERSONAL INJURY, LOSS OF DATA, OR LOSS OF PROFITS — ARISING
        OUT OF OR IN CONNECTION WITH YOUR USE OF GYMSYNC, INCLUDING YOUR USE OF ANY WORKOUT PLAN OR
        COACHING GUIDANCE IT PROVIDES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATED TO THE APP SHALL NOT EXCEED THE
        GREATER OF THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $50 USD.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of
        the above limitations may not apply to you.
      </p>
      <h3>Indemnification</h3>
      <p>
        You agree to indemnify, defend, and hold harmless Yoshiharu Nishikawahara from any claim,
        demand, loss, or damages (including reasonable legal fees) arising out of or related to:
        (a) your User Content; (b) your use of GymSync; (c) your violation of these Terms; or (d)
        your violation of any right of a third party. We reserve the right to assume the exclusive
        defense of any matter otherwise subject to indemnification by you, in which case you agree
        to cooperate with our defense.
      </p>

      <h2>15. Dispute Resolution; Binding Arbitration; Class Action Waiver</h2>
      <p>
        <strong>
          Please read this section carefully. It affects your legal rights, including your right
          to file a lawsuit in court or to have a jury hear your dispute.
        </strong>
      </p>
      <h3>Informal Resolution First</h3>
      <p>
        Before filing any arbitration claim, you agree to first contact us at
        support@gymsyncapp.me and attempt in good faith to resolve the dispute informally for at
        least 30 days.
      </p>
      <h3>Agreement to Arbitrate</h3>
      <p>
        If a dispute is not resolved informally, you and GymSync agree that any dispute, claim, or
        controversy arising out of or relating to these Terms or your use of GymSync will be
        resolved by binding individual arbitration under the Federal Arbitration Act, administered
        by the American Arbitration Association (&quot;AAA&quot;) under its Consumer Arbitration
        Rules, rather than in court — except that either party may bring an individual claim in
        small claims court.
      </p>
      <h3>Class Action and Jury Trial Waiver</h3>
      <p>
        <strong>
          You and GymSync agree that any arbitration or claim will be conducted only on an
          individual basis and not as a class, consolidated, or representative action, and both
          parties waive any right to a jury trial.
        </strong>{' '}
        If the class-action waiver in this paragraph is found unenforceable as to a particular
        claim, that claim (and only that claim) will proceed in a court of competent jurisdiction
        in the venue described in Section 16, and both parties still waive any right to a jury
        trial for that claim.
      </p>
      <h3>Your Right to Opt Out</h3>
      <p>
        You may opt out of this arbitration agreement within 30 days of the date you first agree
        to these Terms by emailing support@gymsyncapp.me with your name, the email address on your
        account, and a clear statement that you opt out of arbitration. Opting out does not affect
        any other part of these Terms.
      </p>
      <h3>Limitations Period</h3>
      <p>
        Any claim arising out of or related to these Terms or GymSync must be filed within one (1)
        year after the claim first arose, or it is permanently barred.
      </p>

      <h2>16. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, USA, and applicable U.S.
        federal law, without regard to conflict-of-law principles. For any claim not subject to
        arbitration under Section 15, the state and federal courts located in Delaware will have
        exclusive jurisdiction, and you consent to personal jurisdiction there.
      </p>

      <h2>17. International Use</h2>
      <p>
        GymSync is operated from Japan and the United States. If you access GymSync from outside
        these countries, you do so on your own initiative and are responsible for compliance with
        local laws, to the extent they apply.
      </p>

      <h2>18. Survival</h2>
      <p>
        Sections 6 through 18 (Fitness/Health Disclaimer, User Content, Intellectual Property,
        Subscriptions [to the extent obligations have accrued], Third-Party Services, Copyright
        Complaints, Termination, Disclaimer of Warranties, Limitation of Liability/Indemnification,
        Dispute Resolution, Governing Law, International Use, and this Survival section) survive
        termination of these Terms or your account.
      </p>

      <h2>19. Miscellaneous</h2>
      <ul>
        <li>
          <strong>Entire Agreement:</strong> These Terms (together with our{' '}
          <Link href="/privacy-policy">Privacy Policy</Link>) are the entire agreement between you
          and GymSync regarding its subject matter, and supersede any prior agreements.
        </li>
        <li>
          <strong>No Waiver:</strong> Our failure to enforce any right or provision is not a waiver
          of that right or provision.
        </li>
        <li>
          <strong>Severability:</strong> If any provision of these Terms is found unenforceable,
          the remaining provisions remain in full effect, and the unenforceable provision will be
          interpreted to best reflect the parties&apos; intent.
        </li>
        <li>
          <strong>Assignment:</strong> You may not assign or transfer these Terms without our
          written consent. We may assign or transfer these Terms without restriction, including in
          connection with a merger, acquisition, or sale of assets.
        </li>
        <li>
          <strong>No Partnership:</strong> Nothing in these Terms creates a partnership, joint
          venture, employment, or agency relationship between you and GymSync.
        </li>
        <li>
          <strong>Notices:</strong> We may provide notices to you via the App or the email address
          on your account. Notices are deemed received 48 hours after we send them.
        </li>
      </ul>

      <h2>20. Contact Us</h2>
      <p>If you have questions about these Terms, contact us at:</p>
      <ul>
        <li><strong>Email:</strong> support@gymsyncapp.me</li>
        <li><strong>Developer:</strong> Yoshiharu Nishikawahara</li>
        <li><strong>Website:</strong> https://gymsyncapp.me</li>
      </ul>
    </LegalPage>
  );
}
