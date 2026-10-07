"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { COUNTIES } from "@/lib/content";
import { BRANCH_OPTIONS, recommendTier, type BranchChoice } from "@/lib/pricing";

const INPUT =
  "h-[46px] w-full rounded-ctl border border-line bg-sur px-3 text-[15px] font-medium text-ink outline-none";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-[13px] font-semibold">{children}</span>;
}

function FieldError({ message }: { message: string }) {
  return (
    <span className="text-err flex items-center gap-1 text-[13px]">
      <Icon name="error" className="!text-[16px]" />
      {message}
    </span>
  );
}

/** Kenyan mobile: 9 digits after +254, starting 7 or 1. Normalises to 2547xxxxxxxx. */
function phoneError(local: string): string | null {
  if (!local) return null;
  if (!/^\d{9}$/.test(local)) return "Enter the 9 digits after +254.";
  if (!/^[71]/.test(local)) return "A Kenyan mobile number starts with 7 or 1.";
  return null;
}

export function StartForm() {
  const [branches, setBranches] = useState<BranchChoice>(1);
  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const phoneMsg = phoneTouched ? phoneError(phone) : null;
  const branchPhrase =
    BRANCH_OPTIONS.find((o) => o.value === branches)?.phrase ?? "1 branch";

  if (submitted) {
    return (
      <div className="bg-sur border-line rounded-sheet flex flex-col items-start gap-3 border p-7">
        <Icon name="mark_email_read" filled className="text-ok !text-[48px]" />
        <span className="stretch-mid text-[22px] font-extrabold">Check your email</span>
        <span className="text-mut text-[15px] leading-[1.55]">
          We sent a 6-digit code. Enter it on the next screen and your dashboard opens
          with a setup checklist. Recommended plan for {branchPhrase}:{" "}
          <b className="text-ink">{recommendTier(branches)}</b>. You can change it any
          time during the trial.
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setPhoneTouched(true);
        if (phoneError(phone)) return;
        // No signup API yet — the design ends on the confirmation state.
        setSubmitted(true);
      }}
      className="bg-sur border-line rounded-sheet flex flex-col gap-3.5 border p-7"
    >
      <label className="flex flex-col gap-1.5">
        <Label>Gym name</Label>
        <input required placeholder="e.g. Simba Fitness" className={INPUT} />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1.5">
          <Label>Your name</Label>
          <input required placeholder="Full name" className={INPUT} />
        </label>
        <label className="flex flex-col gap-1.5">
          <Label>County</Label>
          <div className="relative">
            <select className={`${INPUT} appearance-none pr-9`} defaultValue={COUNTIES[0]}>
              {COUNTIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <Icon
              name="expand_more"
              className="text-mut pointer-events-none absolute top-[13px] right-2.5"
            />
          </div>
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <Label>Work email</Label>
        <input required type="email" placeholder="you@yourgym.co.ke" className={INPUT} />
      </label>

      <label className="flex flex-col gap-1.5">
        <Label>Phone</Label>
        <div
          className={`rounded-ctl bg-sur flex h-[46px] overflow-hidden ${
            phoneMsg ? "border-err border-2" : "border-line border"
          }`}
        >
          <span className="bg-sur2 text-mut border-line flex items-center border-r px-3 font-mono text-sm">
            +254
          </span>
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 9))}
            onBlur={() => setPhoneTouched(true)}
            inputMode="numeric"
            autoComplete="tel-national"
            aria-invalid={Boolean(phoneMsg)}
            placeholder="7XX XXX XXX"
            className="text-ink min-w-0 flex-1 border-0 bg-transparent px-3 font-mono text-[15px] font-medium outline-none"
          />
        </div>
        {phoneMsg && <FieldError message={phoneMsg} />}
      </label>

      <label className="flex flex-col gap-1.5">
        <Label>Number of branches</Label>
        <div className="bg-sur2 flex gap-1 rounded-xl p-1">
          {BRANCH_OPTIONS.map((o) => (
            <button
              key={o.value}
              type="button"
              onClick={() => setBranches(o.value)}
              aria-pressed={branches === o.value}
              className={`flex-1 cursor-pointer rounded-lg px-1 py-2.5 text-center text-sm ${
                branches === o.value
                  ? "bg-sur shadow-seg font-bold"
                  : "text-mut font-medium"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </label>

      <button
        type="submit"
        className="bg-acc text-onacc mt-1.5 h-[54px] cursor-pointer rounded-xl border-0 text-base font-extrabold whitespace-nowrap transition-[filter] duration-150 hover:brightness-95"
      >
        Create gym &amp; start trial
      </button>

      <span className="text-mut text-xs leading-[1.5]">
        We&apos;ll email a one-time code to confirm. By continuing you accept the GymOS
        terms and data protection policy (Kenya Data Protection Act, 2019).
      </span>
    </form>
  );
}
