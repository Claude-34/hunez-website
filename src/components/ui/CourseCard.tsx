import React from "react";
import type { Course } from "@/data/courses";
import { Button } from "@/components/ui/Button";

interface CourseCardProps {
  course: Course;
  onSelectCourse?: (course: Course) => void;
}

export function CourseCard({ course, onSelectCourse }: CourseCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-3xl border border-olive/20 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-forest/40 overflow-hidden">
      {/* Top Banner Accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-forest via-olive to-warm" />

      <div>
        {/* Category & Badge Header */}
        <div className="flex items-center justify-between gap-2 mb-4 pt-1">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-forest/10 text-forest">
            {course.category}
          </span>

          {course.badge && (
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-warm text-white shadow-xs">
              {course.badge}
            </span>
          )}
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-bold text-forest group-hover:text-olive transition-colors leading-snug">
          {course.title}
        </h3>

        {/* Short Summary */}
        <p className="mt-3 text-sm text-charcoal/80 leading-relaxed line-clamp-3">
          {course.summary}
        </p>

        {/* Course Key Details Badges */}
        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-charcoal/70">
          <div className="flex items-center gap-1.5 bg-sage/60 px-3 py-1.5 rounded-lg">
            <span>⏱️</span>
            <span>{course.duration}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-sage/60 px-3 py-1.5 rounded-lg">
            <span>📊</span>
            <span>{course.level}</span>
          </div>

          {course.certificate && (
            <div className="flex items-center gap-1.5 bg-forest/10 text-forest px-3 py-1.5 rounded-lg font-bold">
              <span>🎓</span>
              <span>CPD Certificate</span>
            </div>
          )}
        </div>

        {/* Learning Outcomes Preview */}
        <div className="mt-6 pt-4 border-t border-olive/15">
          <span className="text-xs font-bold text-forest uppercase tracking-wider block mb-2">
            What You&apos;ll Learn:
          </span>
          <ul className="space-y-1.5">
            {course.learningOutcomes.slice(0, 3).map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-charcoal/80">
                <span className="text-forest font-bold shrink-0">✓</span>
                <span className="line-clamp-1">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Price & Purchase Actions Footer */}
      <div className="mt-8 pt-5 border-t border-olive/15">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-2xl font-extrabold text-forest">£{course.price}</span>
            {course.originalPrice && (
              <span className="ml-2 text-xs text-charcoal/40 line-through">
                £{course.originalPrice}
              </span>
            )}
            <span className="block text-[10px] text-charcoal/60">One-time purchase • Lifetime access</span>
          </div>

          <span className="text-xs font-bold text-warm bg-warm/10 px-2.5 py-1 rounded-full">
            {course.modules.length} Modules
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Button
            href={`/contact?intent=course-purchase&course=${course.slug}`}
            variant="warm"
            className="w-full"
          >
            Enroll / Buy Course →
          </Button>

          {onSelectCourse && (
            <button
              onClick={() => onSelectCourse(course)}
              className="w-full sm:w-auto text-xs font-bold text-forest hover:text-warm transition-colors py-2.5 px-3 rounded-full hover:bg-forest/5 whitespace-nowrap"
            >
              View Syllabus
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
