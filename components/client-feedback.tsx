import { Quote, Star, ArrowUpRight } from "lucide-react";
import { portfolio as p, type ClientReview } from "@/content/portfolio";
import { SectionHeading } from "@/components/sections";

export function ClientFeedback() {
  const reviews: ClientReview[] = p.reviews;
  return (
    <section className="section container client-feedback" aria-labelledby="client-feedback-title">
      <div id="client-feedback-title"><SectionHeading label={p.feedback.eyebrow} title={p.feedback.title} description={p.feedback.description} /></div>
      <div className="review-grid">
        {reviews.map(review => (
          <article className={`review-card ${review.quote ? "has-quote" : "rating-only"}`} key={review.id}>
            <div className="review-top"><span className="review-source">{p.feedback.source}</span>{review.quote ? <Quote size={21} aria-hidden="true" /> : <Star size={21} aria-hidden="true" />}</div>
            <div className="review-rating" role="img" aria-label={`${review.rating.toFixed(1)} ${p.feedback.ratingScale}`}>
              <span className="review-stars" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={14} fill="currentColor" />)}</span>
              <span aria-hidden="true">{review.rating.toFixed(1)} <span className="muted">/ 5</span></span>
            </div>
            <h3>{review.contract}</h3>
            <p className="review-dates mono">{review.dates}</p>
            {review.quote && <blockquote><p>{review.quote}</p>{review.excerpt && <span className="review-excerpt">{p.feedback.excerpt}</span>}</blockquote>}
            {review.endorsements?.length && <div className="review-endorsements"><p>{p.feedback.endorsements}</p><ul className="tags">{review.endorsements.map(item => <li key={item}>{item}</li>)}</ul></div>}
            <footer className="review-attribution"><span>{p.feedback.attribution}</span>{review.sourceUrl && <a className="text-action" href={review.sourceUrl} target="_blank" rel="noopener noreferrer">{p.feedback.sourceLink}<ArrowUpRight size={14} /></a>}</footer>
          </article>
        ))}
      </div>
    </section>
  );
}
