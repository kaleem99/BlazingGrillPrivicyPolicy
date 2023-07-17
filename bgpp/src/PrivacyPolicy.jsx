import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin: 0;
  padding: 10px;
  background-color: #f2f2f2;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
`;

const PrivacyPolicy = () => {
  const [sections, setSections] = useState([
    {
      title: "1. Information We Collect",
      content: `
        1.1 Personal Information:
        We may collect the following personal information when you sign up or use our App:
        - Full name
        - Email address
        - Phone number
        - Password

        1.2 Order Information:
        When you place an order through our App, we may collect additional information such as:
        - Delivery address
        - Payment information
        - Order preferences

        1.3 Usage Information:
        We may collect non-personal information about how you use our App, including:
        - Location data (if you grant us permission)
      `,
    },
    {
      title: "2. Use of Information",
      content: `
        2.1 Provide Services:
        We use the collected information to provide and improve our services, including order processing, order tracking, and customer support.

        2.2 Personalization:
        We may personalize your App experience by recommending relevant products, offers, and promotions based on your order history and preferences.

        2.3 Communication:
        We may use your email or phone number to send you service-related communications, including order confirmations, delivery updates, and promotional offers. You can opt-out of receiving marketing communications at any time.

        2.4 Legal Compliance:
        We may use your information to comply with applicable laws, regulations, or legal processes.
      `,
    },
    {
      title: "3. Data Sharing",
      content: `
        3.1 Third-Party Service Providers:
        We may share your information with trusted third-party service providers who assist us in delivering our services (e.g., payment processors, delivery partners). These providers are obligated to handle your data securely and only process it for specified purposes.

        3.2 Business Transfers:
        If The Blazing Grill undergoes a merger, acquisition, or sale, your information may be transferred as part of the transaction. We will notify you of any such change and ensure the protection of your personal information.

        3.3 Legal Obligations:
        We may disclose your information to comply with legal obligations, enforce our policies, or protect our rights, property, or safety.
      `,
    },
    {
      title: "4. Data Security",
      content: `
        We employ appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
      `,
    },
    {
      title: "5. Children's Privacy",
      content: `
        The App is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us, and we will promptly delete it.
      `,
    },
    {
      title: "6. Your Rights",
      content: `
        You have the right to access, update, and delete your personal information held by us. You may also request the restriction of processing or object to the processing of your personal information. To exercise your rights or if you have any questions or concerns about our Privacy Policy, please contact us using the information provided at the end of this policy.
      `,
    },
    {
      title: "7. Changes to the Privacy Policy",
      content: `
        We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any significant changes through the App or by other means. By continuing to use the App after such changes, you acknowledge and accept the updated Privacy Policy.
      `,
    },
    {
      title: "8. Contact Us",
      content: `
        If you have any questions, comments, or requests regarding this Privacy Policy or our privacy practices, please contact us at:

        - Email: info@theblazinggrill.com
        - Phone: 123-456-7890
        - Address: 1234 Main Street, City, State, Zip Code
      `,
    },
  ]);

  const handleSectionToggle = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].open = !updatedSections[index].open;
    setSections(updatedSections);
  };

  return (
    <>
      <h1>The Blazing Grill Privacy Policy</h1>
      <div>
        {sections.map((section, index) => (
          <Section key={index}>
            <Title onClick={() => handleSectionToggle(index)}>
              {section.title}
            </Title>
            {section.open && <Content>{section.content}</Content>}
          </Section>
        ))}
      </div>
    </>
  );
};

export default PrivacyPolicy;
