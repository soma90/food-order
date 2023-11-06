import { useState, useEffect } from "react";

import useHttp from "../../hooks/ues-http";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItme";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const { isLoading, error: httpError, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (data) => {
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals(
      {
        url: "https://food-order-8064b-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
      },
      transformMeals
    );
  }, [fetchMeals]);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
