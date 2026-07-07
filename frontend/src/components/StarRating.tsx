"use client";

interface StarRatingProps {
  rating: number;
  interactive?: boolean;
  onChange?: (value: number) => void;
}

export default function StarRating({
  rating,
  interactive = false,
  onChange,
}: StarRatingProps) {
  const stars = [1, 2, 3, 4, 5];

  const handleClick = (value: number) => {
    if (interactive && onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex items-center gap-0.5">
      {stars.map((star) => {
        const filled = rating >= star;
        const halfFilled = !filled && rating >= star - 0.5;

        return (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            disabled={!interactive}
            className={`text-xl ${
              interactive
                ? "cursor-pointer hover:scale-110 transition-transform"
                : "cursor-default"
            }`}
            aria-label={`${star} estrella${star > 1 ? "s" : ""}`}
          >
            <span className={filled || halfFilled ? "text-yellow-400" : "text-gray-300"}>
              {filled || halfFilled ? "★" : "☆"}
            </span>
          </button>
        );
      })}
    </div>
  );
}
