import Banner from "../components/Banner";
import List from "../components/List";

function PrivacyPolicy() {
  return (
    <>
      <Banner title="Privacy Policy" text="Privacy Policy" />
      <section className="">
        <div className="pt-20">
          <h4>What is this Privacy Notice for?</h4>
          <p className="">
            Cyberspace Limited (“Cyberspace”, “the Company”, or “We”) values
            your Personal Data and we are committed to protecting your privacy
            whenever you interact with us. Please read this Privacy Notice
            (Notice) to understand our policies, processes and procedures
            regarding the processing of your personal data.{" "}
          </p>
          <p className="mt-5">
            By this Notice, we explain to you how your Personal Data is
            collected, used, managed and transferred by Cyberspace and also
            explain how you can update your Personal Data with us and exercise
            your rights in respect of the Personal Data provided to us.{" "}
          </p>
        </div>

        <div className="pt-20">
          <h4>The Personal Data that we collect</h4>
          <p className="">
            We collect Personal Data that you give to us, for example, where you
            create an account with us, request for further information about our
            product, fill a form, apply for a job through our website or you
            subscribe to newsletters on our website.
          </p>
          <p className="mt-5">
            We may also automatically collect some technical information when
            you visit our website such as your IP address, and information about
            your visit, such as the pages that you viewed. This information
            helps us understand customer interests and helps us improve our
            website. When you visit our site, the pages that you look at, and a
            short text file called a cookie, are downloaded to your computer. By
            visiting and using our website, you agree to our use of cookies in
            line with Cyberspace’s policies. For more details about Cookies,
            please read our Cookies Policy available through this link.
          </p>
        </div>

        <div className="pt-20">
          <h4>What Purpose do we use your Personal Data?</h4>
          <p className="">
            We may process your Personal Data to communicate with you (including
            sending marketing or promotional materials to you), provide you with
            further information about our products and how we can serve you
            better, respond to your purchase orders or requests; process your
            application for employment with Cyberspace or to fulfil our
            contractual obligations with you. We may also process your Personal
            Data to comply with provisions of applicable laws.
          </p>
        </div>

        <div className="pt-20">
          <h4>What Constitutes your Consent?</h4>
          <p className="">
            Where processing of Personal Data is based on consent, we shall
            obtain the requisite consent at the time of collection of the
            Personal Data. In this regard, you consent to the processing of your
            Personal Data when you access our platforms, or use our services,
            content, features, technologies or functions offered on our website
            or other digital platforms. You can withdraw your consent at any
            time, but such withdrawal will not affect the lawfulness of
            processing based on consent given before its withdrawal.
          </p>
        </div>

        <div className="pt-20">
          <h4>Who do we share your Personal Data with?</h4>
          <p className="">
            We respect your privacy and we limit disclosure of your Personal
            Data to third parties. We do not sell, give or trade any Personal
            Data that We obtain from you to any third party for data mining or
            marketing purposes. However, we may share your Personal Data with
            companies within the Cyberspace, service providers engaged by us to
            provide services to Cyberspace subject to appropriate data security
            and protection. In addition, we may transfer your Personal Data out
            of Nigeria in line with the requirements of the Nigeria Data
            Protection Regulation, 2019. We may also share your information
            where there is a regulatory or statutory obligation to disclose such
            Personal Data in accordance with provisions of applicable laws.
          </p>
        </div>

        <div className="pt-20">
          <h4>Security of your Personal Data</h4>
          <p className="">
            We take security of your Personal Data serious, and We make every
            effort to keep your Personal Data secure. We have put in place
            technological and organizational procedures, including requiring our
            staff and any third parties who carry out any work on our behalf to
            comply with appropriate security standards in order to protect your
            Personal Data.
          </p>
        </div>

        <div className="pt-20">
          <h4>Retention of your Personal Data</h4>
          <p className="">
            We take appropriate measures to ensure that your Personal Data is
            only processed for the minimum period necessary in line with the
            purposes set out in this Notice or as required by applicable laws,
            until a time it is no longer required or has no use. Once your
            Personal Data is no longer required, we destroy it in a safe and
            secure manner.
          </p>
        </div>

        <div className="pt-20">
          <h4>Your Rights </h4>
          <p className="">
            Cyberspace collects Personal Data only for the purposes identified
            in this Policy and such information cannot be reused for another
            purpose that is incompatible with the original purpose.
          </p>
          <div className="my-5">
            <p>
              You can exercise the following rights with respect to your
              Personal Data with Cyberspace:
            </p>
            <List
              items={[
                "Request for and access your Personal Data collected and stored by Cyberspace;",
                "Withdraw consent at any time. For example, you can withdraw your consent to receipt of our marketing or promotional materials or unsubscribe to our newsletters; ",
                "Object to automated decision making;",
                "Request rectification and modification of Personal Data kept by Cyberspace; ",
                "Request for deletion of your Personal Data;",
                "Be informed of and entitled to provide consent prior to the processing of Personal Data for purposes other than that for which the Personal Data were collected;",
                "Request that Cyberspace restricts processing of your Personal Data; ",
                "Request for information regarding any specific processing of your personal data.",
              ]}
            />
          </div>
          <p>
            If you wish to exercise any of these rights you may contact our Data
            Protection Officer (DPO) using the contact details provided below.
            You also have the right to complain to the National Information
            Technology Development Agency (NITDA) if you believe that we have
            violated your privacy rights.
          </p>
        </div>

        <div className="pt-20">
          <h4>Changes to our Privacy Notice</h4>
          <p className="">
            Due to constant changes in technology and regulatory requirements,
            we may need to change our privacy policies or update this Notice
            from time to time. You will always be able to find the most recent
            version of our updated privacy policy on this site.
          </p>
        </div>

        <div className="pt-20">
          <h4>Contact & Communication</h4>
          <p className="">
            If you would like further information on this Notice, or to contact
            our DPO, you may contact us at Cyberspace Limited, 33, Saka Tinubu
            Street, VI, Lagos, or at dpo@cyberspace.net.ng
          </p>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
