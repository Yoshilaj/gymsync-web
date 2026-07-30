import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — GymSync',
  description: 'How GymSync collects, uses, and protects your information.',
};

const EFFECTIVE_DATE = 'July 30, 2026';

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy for GymSync" effectiveDate={EFFECTIVE_DATE}>
      <p>
        Yoshiharu Nishikawahara (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) built GymSync as a
        freemium fitness coaching app. This Privacy Policy explains how we collect, use, and
        protect your information when you use GymSync.
      </p>
      <p>
        By using GymSync, you agree to the practices described in this Privacy Policy. If you do
        not agree, please do not use the app.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Information You Provide Directly</h3>
      <ul>
        <li>
          <strong>Account information:</strong> When you create an account, we collect your email
          address and password (handled by our authentication provider, Supabase — we never see
          your password in plain text).
        </li>
        <li>
          <strong>Profile information:</strong> Your display name, age, sex, and body statistics
          you choose to enter (used only to calculate your coaching math — calorie needs,
          recovery, and training load), and, if you choose to set one, a profile picture selected
          from your photo library or taken with your camera.
        </li>
        <li>
          <strong>Workout data:</strong> The workout plans, exercises, sets, reps, weights, and
          body-weight logs you create or record in the app.
        </li>
        <li>
          <strong>Coach conversations:</strong> The messages you send to your AI coach, and any
          voice audio captured during a live voice coaching session.
        </li>
        <li>
          <strong>Support requests:</strong> If you contact us for support, we collect your email
          address and the content of your message.
        </li>
      </ul>

      <h3>Information Collected Automatically</h3>
      <ul>
        <li>
          <strong>Device information:</strong> We may collect basic device and app version
          information for compatibility and debugging purposes.
        </li>
      </ul>
      <p>
        GymSync does not use third-party analytics or advertising SDKs, does not use cookies or
        cross-device ad tracking, and does not show ads. If this changes in a future version, this
        Policy will be updated first.
      </p>

      <h3>Information from Third Parties</h3>
      <p>
        GymSync does not currently offer third-party or social sign-in, and has no public forums,
        community feed, or user-to-user messaging — your workout data and coach conversations are
        private to your account. If this changes, this Policy will be updated before the feature
        ships.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and maintain GymSync&apos;s core functionality — your account, your workout plans, and your training history</li>
        <li>Power the AI coach: generating chat replies, spoken coaching, and personalized workout guidance based on your conversation and training history</li>
        <li>Convert your speech to text during live voice coaching sessions, and your coach&apos;s text replies to spoken audio</li>
        <li>Respond to your support requests</li>
        <li>Fix bugs and improve the app</li>
      </ul>
      <p>We do NOT use your information to:</p>
      <ul>
        <li>Sell your data to third parties</li>
        <li>Build advertising profiles</li>
        <li>Show you ads</li>
        <li>
          Make any fully-automated decision that denies you access to the service or affects your
          legal rights without the ability to reach a human by contacting support
        </li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <p>We do not sell, rent, or trade your personal information.</p>
      <p>We share information only in these circumstances:</p>
      <ul>
        <li>
          <strong>Service providers:</strong> With the third parties listed in Section 4, solely
          to operate the app. They may only use your data to perform services for us.
        </li>
        <li>
          <strong>Legal requirements:</strong> If required by law, subpoena, or other legal
          process, or to protect the rights, property, or safety of GymSync, our users, or the
          public.
        </li>
        <li>
          <strong>Business transfers:</strong> If GymSync is involved in a merger, acquisition, or
          sale of assets, your information may be transferred as part of that transaction. We will
          notify you of any such change and any choices you may have.
        </li>
      </ul>

      <h2>4. Third-Party Services</h2>
      <p>GymSync uses the following third-party services to operate:</p>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Purpose</th>
            <th>Privacy Policy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Supabase</td>
            <td>Account authentication and database storage for your profile, plans, and training history</td>
            <td><a href="https://supabase.com/privacy">Supabase Privacy Policy</a></td>
          </tr>
          <tr>
            <td>Anthropic (Claude)</td>
            <td>Processes your coach conversations and workout data to generate AI coaching replies and plans</td>
            <td><a href="https://www.anthropic.com/legal/privacy">Anthropic Privacy Policy</a></td>
          </tr>
          <tr>
            <td>ElevenLabs</td>
            <td>Converts your coach&apos;s text replies into spoken voice audio during live voice coaching</td>
            <td><a href="https://elevenlabs.io/privacy">ElevenLabs Privacy Policy</a></td>
          </tr>
          <tr>
            <td>Apple (on-device/Apple Speech services)</td>
            <td>Converts your speech to text during live voice coaching</td>
            <td><a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a></td>
          </tr>
          <tr>
            <td>Apple App Store</td>
            <td>Processes subscription payments; Apple, not GymSync, handles your payment details</td>
            <td><a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a></td>
          </tr>
        </tbody>
      </table>
      <p>
        Voice audio captured during a coaching session is transcribed to text and is not retained
        as audio beyond what&apos;s needed to complete that session.
      </p>

      <h3>AI-Generated Content</h3>
      <p>
        Some content you see in GymSync — coaching replies, generated workout plans, and spoken
        coaching — is generated using artificial intelligence based on the data described above.
        AI-generated content may occasionally be inaccurate; see the &quot;AI and Coaching
        Disclaimer&quot; in our{' '}
        <Link href="/terms-of-service">Terms of Service</Link> for details.
      </p>

      <h2>5. International Data Transfers</h2>
      <p>
        GymSync&apos;s service providers (Supabase, Anthropic, and ElevenLabs) operate servers in
        the United States. If you are located outside the United States, using GymSync means your
        personal information — including workout and coaching data — is transferred to and
        processed in the United States, which may have different data protection laws than your
        home country. We require our service providers to protect your data under contractual
        safeguards.
      </p>

      <h2>6. Data Retention</h2>
      <ul>
        <li><strong>Account and training data:</strong> Retained while your account is active.</li>
        <li>
          <strong>Account deletion:</strong> GymSync includes an in-app &quot;Delete account&quot;
          action (Settings → Account settings). Deleting your account immediately and permanently
          erases your profile, plans, training history, and coach conversations from our systems.
          This cannot be undone.
        </li>
        <li><strong>Voice audio:</strong> Not retained beyond the live session it was captured in.</li>
        <li>
          <strong>Support correspondence:</strong> Retained as long as reasonably necessary to
          resolve your request and for our records, then deleted.
        </li>
      </ul>

      <h2>7. Data Security</h2>
      <p>We implement reasonable technical measures to protect your information, including:</p>
      <ul>
        <li>Encryption in transit (TLS/HTTPS) for all network communications</li>
        <li>Authentication and access controls provided by Supabase</li>
        <li>Access limited to what&apos;s needed to operate the app</li>
      </ul>
      <p>
        No method of transmission or storage is 100% secure, and we cannot guarantee absolute
        security. If we become aware of a data breach affecting your personal information, we will
        notify you and any applicable regulator without undue delay, as required by applicable
        law.
      </p>

      <h2>8. Your Rights</h2>
      <p>Regardless of where you live, you may:</p>
      <ul>
        <li><strong>Access</strong> the personal data we hold about you</li>
        <li><strong>Correct</strong> inaccurate data (most of this you can edit directly in the app)</li>
        <li>
          <strong>Delete</strong> your data, immediately and permanently, via Settings → Account
          settings → Delete account, or by contacting us
        </li>
        <li><strong>Withdraw consent</strong> for processing at any time by deleting your account</li>
        <li>
          <strong>Appeal</strong> a decision we make about your rights request by replying to our
          response with &quot;APPEAL&quot; in the subject line
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us at support@gymsyncapp.me. We will respond
        within 30 days.
      </p>

      <h3>For Users in Japan</h3>
      <p>
        GymSync is operated by an individual developer based in Japan. In accordance with
        Japan&apos;s Act on the Protection of Personal Information (APPI):
      </p>
      <ul>
        <li>
          <strong>Purpose of use:</strong> Your personal information is used solely for the
          purposes described in Section 2 of this Policy.
        </li>
        <li>
          <strong>Cross-border transfer:</strong> Because we use overseas service providers
          (Supabase, Anthropic, and ElevenLabs, all of which process data on servers located
          outside Japan), your personal information is transferred to and processed in other
          countries, including the United States. By using GymSync, you consent to this transfer.
        </li>
        <li>
          <strong>Disclosure, correction, and deletion:</strong> You have the right to request
          disclosure of, correction to, or deletion of your personal information. Contact us at
          support@gymsyncapp.me to make a request.
        </li>
        <li>
          <strong>Complaints:</strong> If you believe your rights under APPI have not been
          respected, you may contact Japan&apos;s Personal Information Protection Commission
          (個人情報保護委員会), or reach out to us directly first so we can address your concern.
        </li>
      </ul>

      <h3>For California Residents (CCPA)</h3>
      <p>
        As a matter of practice, regardless of whether the CCPA&apos;s thresholds apply to us:
      </p>
      <ul>
        <li>
          <strong>Categories collected:</strong> Identifiers (email, user ID), account
          credentials, and the fitness/health-adjacent information described in Section 1 (training
          data, coach conversations, voice audio, body statistics).
        </li>
        <li><strong>Sources:</strong> Directly from you.</li>
        <li>
          <strong>Purpose:</strong> Solely to operate the App&apos;s coaching features, as
          described in Section 2. We do not use this information for cross-context behavioral
          advertising.
        </li>
        <li>
          We do not sell or share your personal information, and do not use targeted-advertising
          cookies or trackers.
        </li>
        <li>
          You may request to know what personal information we hold about you, request its
          deletion, or request correction, by contacting support@gymsyncapp.me.
        </li>
        <li>
          We will not discriminate against you (e.g., by degrading service or charging a different
          price) for exercising these rights.
        </li>
      </ul>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        GymSync is not intended for children under 13. We do not knowingly collect personal
        information from children under 13. If we discover that we have collected data from a
        child under 13, we will delete it promptly. If you believe a child has provided us with
        personal information, please contact us at support@gymsyncapp.me.
      </p>

      <h2>10. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make significant changes, we
        will update the &quot;Last Updated&quot; date above and post the updated policy at this
        URL. Continued use of GymSync after changes are posted constitutes acceptance of the
        updated Privacy Policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions or concerns about this Privacy Policy or our data practices, contact
        us at:
      </p>
      <ul>
        <li><strong>Email:</strong> support@gymsyncapp.me</li>
        <li><strong>Developer:</strong> Yoshiharu Nishikawahara</li>
        <li><strong>Website:</strong> https://gymsyncapp.me</li>
      </ul>
    </LegalPage>
  );
}
