"use client";

import { useState } from "react";
import { courses, type Course } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTABanner } from "@/components/ui/CTABanner";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const categories = [
  "All Courses",
  "Net Zero & Carbon",
  "Circular Economy",
  "Compliance & Strategy",
  "Employee Engagement",
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <>
      {/* Hero Banner Header */}
      <SectionWrapper className="pt-16 md:pt-24 pb-16 bg-sage">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            🎓 SME Training & Skill Building
          </span>
          <SectionHeading
            title="Practical Sustainability Short Courses"
            subtitle="Equip your business with actionable Net Zero, carbon accounting, waste reduction, and employee engagement skills. Affordable, CPD-aligned short courses designed for SMEs."
            align="center"
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 shadow-xs",
                selectedCategory === cat
                  ? "bg-forest text-white shadow-md scale-105"
                  : "bg-white text-charcoal/70 hover:bg-forest/10 hover:text-forest"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </SectionWrapper>

      {/* Courses Catalog Grid */}
      <SectionWrapper className="py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelectCourse={(c) => setSelectedCourse(c)}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-olive/20 max-w-xl mx-auto">
            <span className="text-4xl">📚</span>
            <h3 className="text-lg font-bold text-forest mt-3">New Courses Coming Soon</h3>
            <p className="text-sm text-charcoal/70 mt-1 max-w-md mx-auto">
              We are regularly adding new SME short courses. Contact us to request custom topics or group training!
            </p>
          </div>
        )}
      </SectionWrapper>

      {/* Custom Group Training & Bespoke Workshops Banner */}
      <SectionWrapper variant="muted" className="py-16">
        <div className="max-w-4xl mx-auto rounded-3xl bg-forest text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/20 text-white">
              Bespoke Team Training
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Need Tailored Training for Your Business Team?
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              We deliver customized live workshops, executive briefings, and department-specific sustainability training for businesses of all sizes.
            </p>
          </div>

          <Button
            href="/contact?intent=custom-training"
            variant="warm"
            className="shrink-0"
          >
            Request Custom Workshop →
          </Button>
        </div>
      </SectionWrapper>

      {/* Course Syllabus Modal Drawer */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-10 shadow-2xl border border-forest/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-charcoal/50 hover:text-forest hover:bg-sage/40 transition-all font-bold text-lg"
              aria-label="Close Syllabus"
            >
              ✕
            </button>

            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-forest/10 text-forest mb-2">
              {selectedCourse.category} • {selectedCourse.duration}
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-forest">
              {selectedCourse.title}
            </h3>

            <p className="text-sm text-charcoal/80 leading-relaxed mt-3">
              {selectedCourse.description}
            </p>

            {/* Price Banner inside Modal */}
            <div className="mt-6 p-4 rounded-2xl bg-sage/50 border border-olive/20 flex items-center justify-between">
              <div>
                <span className="text-2xl font-extrabold text-forest">£{selectedCourse.price}</span>
                {selectedCourse.originalPrice && (
                  <span className="ml-2 text-sm text-charcoal/40 line-through">
                    £{selectedCourse.originalPrice}
                  </span>
                )}
                <span className="block text-xs text-charcoal/70">Includes lifetime access & CPD certificate</span>
              </div>

              <Button
                href={`/contact?intent=course-purchase&course=${selectedCourse.slug}`}
                variant="warm"
              >
                Enroll Now (£{selectedCourse.price}) →
              </Button>
            </div>

            {/* Module Breakdown */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-forest mb-4">Course Syllabus & Modules:</h4>
              <div className="space-y-3">
                {selectedCourse.modules.map((mod) => (
                  <div
                    key={mod.number}
                    className="p-4 rounded-xl bg-offwhite border border-olive/15 flex items-start gap-4"
                  >
                    <span className="w-8 h-8 rounded-full bg-forest text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {mod.number}
                    </span>
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="text-sm font-bold text-forest">{mod.title}</h5>
                        <span className="text-xs font-semibold text-warm shrink-0">{mod.duration}</span>
                      </div>
                      <p className="text-xs text-charcoal/70 mt-1">{mod.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="mt-6 pt-4 border-t border-olive/15">
              <span className="text-xs font-bold uppercase tracking-wider text-forest block mb-1">
                Who Should Attend:
              </span>
              <p className="text-xs text-charcoal/80">{selectedCourse.targetAudience}</p>
            </div>
          </div>
        </div>
      )}

      <CTABanner />
    </>
  );
}
