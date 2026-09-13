import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CareersCta() {
  return (
    <section
      className="
        border-t
        border-white/[0.07]
        bg-[#0D1117]
        py-10
        sm:py-12
        lg:py-14
      "
    >
      <div className="evolvaer-container">
        <div
          className="
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-10
          "
        >
          <div>
            <p
              className="
                text-[0.48rem]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#22D3EE]
              "
            >
              Build what comes next
            </p>

            <p
              className="
                mt-3
                max-w-[720px]
                text-[clamp(1.3rem,2vw,1.8rem)]
                font-medium
                leading-[1.3]
                tracking-[-0.03em]
                text-white
              "
            >
              Evolvaer grows through capable people bringing
              different perspectives to{" "}
              <span className="text-white/65">
                problems worth solving.
              </span>
            </p>
          </div>

          <Link
            href="#open-roles"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-2
              rounded-full
              bg-[#2563EB]
              px-5
              py-3
              text-[0.72rem]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#3B82F6]
            "
          >
            View opportunities

            <ArrowRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}