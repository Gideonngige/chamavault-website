import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="min-h-screen bg-gray-50 text-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-gray-600">Privacy Policy for ChamaVault</p>
            <p className="text-gray-500 text-sm">Last updated: August 13, 2025</p>
            <p className="text-gray-700 mt-4">
              This Privacy Policy describes our policies and procedures on the collection, use, 
              and disclosure of your information when you use the Service, and tells you about your 
              privacy rights and how the law protects you.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8 text-gray-700">

            <section>
              <h2 className="text-2xl font-semibold mb-2">Interpretation and Definitions</h2>
              <p className="font-semibold">Interpretation</p>
              <p className="mb-2">
                Words with initial capital letters have meanings defined under the following conditions. 
                These definitions apply whether they appear in singular or plural.
              </p>

              <p className="font-semibold">Definitions</p>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Account:</strong> a unique account created for you to access our Service or parts of it.</li>
                <li><strong>Affiliate:</strong> an entity that controls, is controlled by, or is under common control with a party.</li>
                <li><strong>Application:</strong> refers to ChamaVault.</li>
                <li><strong>Company:</strong> Kelmar Investments, Ground Floor Suite 1, Maccu Building, Meru Town.</li>
                <li><strong>Country:</strong> Kenya.</li>
                <li><strong>Device:</strong> any device that can access the Service.</li>
                <li><strong>Personal Data:</strong> any information relating to an identified or identifiable individual.</li>
                <li><strong>Service:</strong> the Application.</li>
                <li><strong>Service Provider:</strong> third-party companies or individuals processing data on behalf of the Company.</li>
                <li><strong>Usage Data:</strong> data collected automatically, like page visits, browser type, IP address.</li>
                <li><strong>You:</strong> the individual or entity accessing or using the Service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Collecting and Using Your Personal Data</h2>
              <p className="font-semibold">Types of Data Collected</p>
              <p className="mt-2 font-semibold">Personal Data</p>
              <p>
                While using our Service, we may ask you to provide personally identifiable information, such as:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Email address</li>
                <li>First and last name</li>
                <li>Phone number</li>
              </ul>

              <p className="mt-2 font-semibold">Usage Data</p>
              <p>
                Collected automatically when using the Service. May include IP address, browser type, pages visited, device info, and diagnostic data.
              </p>

              <p className="mt-2 font-semibold">Information Collected via Application</p>
              <p>
                With your permission, we may collect location data, camera/photos access, etc. This info is used to improve and provide features of the Service.
              </p>

              <p className="mt-2 font-semibold">Use of Your Personal Data</p>
              <p>We may use your data to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provide and maintain our Service</li>
                <li>Manage your Account</li>
                <li>Perform contracts</li>
                <li>Contact you with updates or promotions</li>
                <li>Manage requests and inquiries</li>
                <li>Business transfers or mergers</li>
                <li>Other purposes such as analysis or improving Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Retention, Transfer & Deletion</h2>
              <p>
                We retain your personal data only as long as necessary, including legal obligations. Data may be processed outside Kenya under adequate security measures. You have the right to delete your personal data by contacting support@chamavault.online.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Disclosure & Security</h2>
              <p>
                Personal data may be disclosed for business transactions, legal obligations, protection of rights, or with your consent. While we implement commercially reasonable security measures, absolute security cannot be guaranteed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Children’s Privacy</h2>
              <p>
                Our Service does not target children under 13. If we discover personal data from children under 13, we remove it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Links to Other Websites</h2>
              <p>
                Our Service may contain links to external websites. We are not responsible for their privacy practices. Please review their Privacy Policies separately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
              <p>
                Updates will be posted on this page with the updated “Last Updated” date. Review periodically for changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Delete Account</h2>
              <p>
                To delete your ChamaVault account, email <a href="mailto:support@chamavault.online" className="text-blue-600 underline">support@chamavault.online</a> with your username, registered email/phone, and optional reason. We will process requests within 7 working days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p>
                For questions, visit <a href="https://chamavault.online/privacy-policy" className="text-blue-600 underline">https://chamavault.online/privacy-policy</a>.
              </p>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
