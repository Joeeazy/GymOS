import { CtaLink } from "@/components/ui/Cta";
import { Display, Eyebrow, SectionTitle } from "@/components/ui/Type";
import { Icon } from "@/components/ui/Icon";
import { PhoneFrame } from "@/components/mocks/PhoneFrame";
import { MemberHomeMock } from "@/components/mocks/MemberHomeMock";
import { DashboardShowcase } from "@/components/home/DashboardShowcase";
import { MPESA_POINTS, PROOF } from "@/lib/content";
import { START_HREF } from "@/lib/nav";

export default function HomePage() {
  return (
    <>
      {/* Hero: two columns from 1040 up. */}
      <section className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-5 pt-10 pb-14 wide:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] wide:px-6 wide:pt-[72px] wide:pb-[88px]">
        <div className="flex flex-col gap-6">
          <Eyebrow>GYM MANAGEMENT FOR KENYA</Eyebrow>
          <Display className="text-balance">
            Members pay with M‑Pesa. Your gym runs itself.
          </Display>
          <p className="text-mut m-0 max-w-[560px] text-[18px] leading-[1.55] text-pretty">
            GymOS is software for gyms and fitness studios in Kenya. Members renew from
            their phone with an M‑Pesa prompt, check in with a QR code, and book classes.
            You see every shilling, every check-in and every expiring membership across all
            your branches, in KES.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <CtaLink href={START_HREF}>Start 14-day free trial</CtaLink>
            <CtaLink href="/how-it-works" variant="secondary">
              See how it works
            </CtaLink>
          </div>
          <span className="text-mut text-[13px]">
            No card needed. Set up in an afternoon. Cancel any time.
          </span>
        </div>
        <div className="flex justify-center">
          <PhoneFrame>
            <MemberHomeMock />
          </PhoneFrame>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-line bg-sur border-t border-b">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-6 px-6 py-7">
          {PROOF.map((p) => (
            <div key={p.title} className="flex flex-col gap-1">
              <span className="text-[15px] font-bold">{p.title}</span>
              <span className="text-mut text-sm leading-[1.5]">{p.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <DashboardShowcase />

      {/* M‑Pesa section */}
      <section className="bg-pri text-onpri">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-10 px-6 py-20">
          <div className="flex flex-col gap-3.5">
            <SectionTitle>Built around how Kenyans actually pay.</SectionTitle>
            <p className="m-0 text-base leading-[1.55]">
              Most gym software is built for card payments and adds M‑Pesa later. GymOS
              starts with M‑Pesa and treats cash and card as the extras.
            </p>
          </div>
          {MPESA_POINTS.map((m) => (
            <div key={m.title} className="flex flex-col gap-2.5">
              <Icon name={m.icon} className="text-acc dark:text-onpri !text-[32px]" />
              <span className="text-[19px] font-bold">{m.title}</span>
              <span className="text-[15px] leading-[1.55]">{m.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto flex max-w-[1240px] flex-col items-center gap-5 px-6 py-[88px] text-center">
        <SectionTitle className="max-w-[720px] text-balance">
          Your first M‑Pesa renewal can come in today.
        </SectionTitle>
        <p className="text-mut m-0 max-w-[560px] text-[17px] leading-[1.55]">
          Create your gym, add a plan, connect your paybill or till, and invite your front
          desk. Most gyms are live the same afternoon.
        </p>
        <CtaLink href={START_HREF} className="!px-6">
          Start 14-day free trial
        </CtaLink>
      </section>
    </>
  );
}
