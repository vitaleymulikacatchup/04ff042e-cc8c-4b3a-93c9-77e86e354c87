"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BookOpen, Gavel, Linkedin, Mail, Scale, Shield, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "feature" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Legal Partners"
          button={{
            text: "Free Consultation",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Expert Legal Representation You Can Trust"
          description="For over 25 years, we have been protecting the rights and interests of individuals and businesses with comprehensive legal solutions and personalized attention."
          tag="Trusted Since 1999"
          tagIcon={Shield}
          buttons={[
            {
              text: "Schedule Consultation",
              href: "contact"
            },
            {
              text: "Our Services",
              href: "feature"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional legal team consultation"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose Legal Partners"
          description="With decades of combined experience and a track record of successful outcomes, our firm stands as a pillar of legal excellence in the community."
          tag="Our Commitment"
          tagIcon={Gavel}
          bulletPoints={[
            {
              title: "Proven Track Record",
              description: "Over 2,500 successful cases with favorable outcomes for our clients",
              icon: Award
            },
            {
              title: "Personalized Attention",
              description: "Every client receives dedicated support and tailored legal strategies",
              icon: Users
            },
            {
              title: "Expert Knowledge",
              description: "Specialized expertise across multiple areas of law and regulations",
              icon: BookOpen
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7841799/pexels-photo-7841799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern law firm office"
          imagePosition="left"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Comprehensive Legal Services"
          description="From complex litigation to routine legal matters, our experienced attorneys provide expert guidance across all major areas of law."
          tag="Practice Areas"
          tagIcon={Scale}
          features={[
            {
              id: "01",
              title: "Business & Corporate Law",
              description: "Complete corporate legal services including formations, mergers, acquisitions, contracts, and regulatory compliance for businesses of all sizes.",
              imageSrc: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Corporate law meeting"
            },
            {
              id: "02",
              title: "Civil Litigation",
              description: "Aggressive representation in civil disputes, commercial litigation, personal injury claims, and complex multi-party lawsuits.",
              imageSrc: "https://images.pexels.com/photos/7876093/pexels-photo-7876093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Courtroom litigation"
            },
            {
              id: "03",
              title: "Family Law",
              description: "Compassionate guidance through divorce, custody disputes, adoption, prenuptial agreements, and other family legal matters.",
              imageSrc: "https://images.pexels.com/photos/7979605/pexels-photo-7979605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Family law consultation"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Attorneys"
          description="Our team combines decades of legal expertise with a commitment to achieving the best possible outcomes for every client."
          tag="Legal Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Managing Partner",
              description: "25+ years specializing in corporate law and complex commercial litigation. Harvard Law School graduate with extensive trial experience.",
              imageSrc: "https://images.pexels.com/photos/6170856/pexels-photo-6170856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell, Managing Partner",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/sarah-mitchell"
                },
                {
                  icon: Mail,
                  url: "mailto:sarah@legalpartners.com"
                }
              ]
            },
            {
              id: "2",
              name: "Michael Torres",
              role: "Senior Partner",
              description: "Expert in family law and estate planning with over 20 years of practice. Known for compassionate client representation and successful outcomes.",
              imageSrc: "https://images.pexels.com/photos/7841788/pexels-photo-7841788.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Torres, Senior Partner",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/michael-torres"
                },
                {
                  icon: Mail,
                  url: "mailto:michael@legalpartners.com"
                }
              ]
            },
            {
              id: "3",
              name: "David Chen",
              role: "Partner",
              description: "Specializes in personal injury and civil litigation. Former prosecutor with exceptional courtroom skills and dedication to client advocacy.",
              imageSrc: "https://images.pexels.com/photos/8790734/pexels-photo-8790734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Chen, Partner",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/david-chen"
                },
                {
                  icon: Mail,
                  url: "mailto:david@legalpartners.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real testimonials from clients who have experienced our dedication to achieving successful legal outcomes."
          tag="Client Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Walsh",
              role: "CEO",
              company: "TechStart Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Walsh testimonial"
            },
            {
              id: "2",
              name: "Robert Kim",
              role: "Business Owner",
              company: "Kim Family Restaurant",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7489109/pexels-photo-7489109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Kim testimonial"
            },
            {
              id: "3",
              name: "Lisa Rodriguez",
              role: "Marketing Director",
              company: "Creative Agency Co",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Rodriguez testimonial"
            },
            {
              id: "4",
              name: "Mark Thompson",
              role: "Real Estate Developer",
              company: "Thompson Properties",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/23495757/pexels-photo-23495757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mark Thompson testimonial"
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Legal Insights & Updates"
          description="Stay informed with the latest legal developments, case studies, and expert analysis from our attorneys."
          tag="Resources"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Business Law",
              title: "New Corporate Compliance Requirements for 2025",
              excerpt: "Understanding the latest regulatory changes and how they impact your business operations and legal obligations.",
              imageSrc: "https://images.pexels.com/photos/7641842/pexels-photo-7641842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Legal compliance documentation",
              authorName: "Sarah Mitchell",
              authorAvatar: "https://images.pexels.com/photos/6170856/pexels-photo-6170856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Family Law",
              title: "Navigating Child Custody During Divorce",
              excerpt: "A comprehensive guide to understanding custody arrangements and protecting your children's best interests during separation.",
              imageSrc: "https://images.pexels.com/photos/7979605/pexels-photo-7979605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Family law consultation",
              authorName: "Michael Torres",
              authorAvatar: "https://images.pexels.com/photos/7841788/pexels-photo-7841788.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Litigation",
              title: "Preparing for Civil Litigation: What to Expect",
              excerpt: "Essential steps and strategies for clients entering civil litigation, from discovery through trial preparation.",
              imageSrc: "https://images.pexels.com/photos/7876093/pexels-photo-7876093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Courtroom preparation",
              authorName: "David Chen",
              authorAvatar: "https://images.pexels.com/photos/8790734/pexels-photo-8790734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "8 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Schedule Your Free Consultation"
          description="Get expert legal advice tailored to your specific situation. Contact us today to discuss your case with one of our experienced attorneys."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "legal-area",
              type: "text",
              placeholder: "Area of Legal Need",
              required: false
            }
          ]}
          textarea={{
            name: "case-details",
            placeholder: "Brief description of your legal matter or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Request Consultation"
          imageSrc="https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Legal Partners office reception"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Practice Areas",
              items: [
                {
                  label: "Business Law",
                  href: "feature"
                },
                {
                  label: "Civil Litigation",
                  href: "feature"
                },
                {
                  label: "Family Law",
                  href: "feature"
                },
                {
                  label: "Personal Injury",
                  href: "feature"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Firm",
                  href: "about"
                },
                {
                  label: "Attorneys",
                  href: "team"
                },
                {
                  label: "Client Reviews",
                  href: "testimonial"
                },
                {
                  label: "Legal Resources",
                  href: "blog"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Schedule Consultation",
                  href: "contact"
                },
                {
                  label: "Office Location",
                  href: "contact"
                },
                {
                  label: "Phone: (555) 123-4567",
                  href: "tel:5551234567"
                },
                {
                  label: "Email: info@legalpartners.com",
                  href: "mailto:info@legalpartners.com"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Legal Partners. All rights reserved."
          logoSrc="/brand/logo.svg"
        />
      </div>
    </ThemeProvider>
  );
}