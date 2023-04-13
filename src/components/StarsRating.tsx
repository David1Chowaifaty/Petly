"use client";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../app/firebase"; // your Firebase configuration file
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
interface StarsRatingProps {
  productId: string;
  userId: string;
  category: string;
}

interface ProductData {
  averageRating: number;
  numRatings: number;
}

interface RatingData {
  value: number;
}

const StarsRating: React.FC<StarsRatingProps> = ({
  productId,
  userId,
  category,
}) => {
  const [userRating, setUserRating] = useState<number | undefined>(undefined);
  const [productData, setProductData] = useState<ProductData | undefined>(
    undefined
  );

  // Load the current user's rating for the product (if any)
  useEffect(() => {
    const fetchRating = async () => {
      const ratingDoc = doc(
        collection(db, category, productId, "ratings"),
        userId
      );
      const ratingData = await getDoc(ratingDoc).then(
        (doc) => doc.data() as RatingData | undefined
      );
      setUserRating(ratingData?.value);
    };
    fetchRating();
  }, [category, productId, userId]);

  // Load the product's average rating and number of ratings
  useEffect(() => {
    const fetchProductData = async () => {
      const productDoc = doc(db, category, productId);
      const productData = await getDoc(productDoc).then(
        (doc) => doc.data() as ProductData | undefined
      );
      setProductData(productData);
    };
    fetchProductData();
  }, [category, productId]);

  // Update the user's rating when they click on a star
  const handleRatingChange = async (value: number) => {
    const ratingDoc = doc(
      collection(db, category, productId, "ratings"),
      userId
    );
    const productDoc = doc(db, category, productId);

    // Update user rating
    if (userRating) {
      await updateDoc(ratingDoc, { value });
    } else {
      await setDoc(ratingDoc, { value });
    }

    // Update product rating
    if (!productData) {
      const newProductData = { averageRating: value, numRatings: 1 };
      await setDoc(productDoc, newProductData);
      setProductData(newProductData);
    } else {
      const { averageRating, numRatings } = productData;
      const newAverageRating =
        (averageRating * numRatings + value) / (numRatings + 1);
      await updateDoc(productDoc, {
        averageRating: newAverageRating,
        numRatings: numRatings + 1,
      });
      setProductData({
        averageRating: newAverageRating,
        numRatings: numRatings + 1,
      });
    }

    setUserRating(value);
  };

  const averageRating = productData?.averageRating ?? 0;
  const numStars = Math.round(averageRating * 5);
  return (
    <div className="flex items-center gap-1">
      {Array.from(Array(5), (_, i) => i + 1).map((i) => (
        <button type="button" key={i} onClick={() => handleRatingChange(i)}>
          <p className="sr-only">rating+{i}</p>
          {userRating ? (
            <FilledStarIcon className="h-6 w-6 text-yellow-500" />
          ) : averageRating >= i ? (
            <FilledStarIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <StarIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
      ))}
      <p>{productData?.numRatings ?? 0} reviews</p>
    </div>
  );
};

export default StarsRating;
