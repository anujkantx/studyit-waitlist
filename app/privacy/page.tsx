import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "8rem 0 6rem" }}>
        <div className="container-narrow">
          <h1 className="display-md" style={{ marginBottom: 32 }}>Privacy Policy</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, fontSize: "1.0625rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
            <p>
              This Privacy Policy explains how we collect and use your information during the Studyit pre-launch phase.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text)", marginTop: 16 }}>Information We Collect</h2>
            <p>
              When you join our early-access list or register your campus interest, we collect the information you voluntarily provide, such as your name, email address, university, program, and semester.
              We also collect basic attribution data (such as UTM parameters and referral codes) to understand how you found us.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text)", marginTop: 16 }}>How We Use Your Information</h2>
            <p>
              We use this information solely to:
            </p>
            <ul style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>Manage the Studyit early-access list and invite you when we launch.</li>
              <li>Understand which universities and programs have the most demand to prioritize our rollout.</li>
              <li>Communicate important launch information and product updates.</li>
              <li>Contact you regarding contributor or campus ambassador opportunities if you expressed interest.</li>
            </ul>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text)", marginTop: 16 }}>Data Sharing and Security</h2>
            <p>
              We do not sell, rent, or trade your personal information. Your data is stored securely in our database. We only collect the minimal information necessary for our pre-launch activities.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text)", marginTop: 16 }}>Your Rights</h2>
            <p>
              You can unsubscribe from our communications at any time. If you would like us to delete your information from our early-access list, please contact us at hello@studyit.in.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
