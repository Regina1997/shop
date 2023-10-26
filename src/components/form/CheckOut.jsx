import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "./CheckOut.css";
import { hideCheckout } from "../../store/slices/checkout";

function CheckOut() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmited, setSubmited] = useState(false);
  const dispatch = useDispatch();
  const { visible } = useSelector((state) => state.checkout);
  if (!visible) return null;

  const onSubmit = (data) => {
    setSubmited(true);
    console.log(JSON.stringify(data));
  };

  return (
    <div className="container-form">
      <div className="form-popup">
        {isSubmited ? (
          <h3 className="heading">Заказ оформлен, ожидайте подтверждения!</h3>
        ) : (
          <>
            <h3 className="heading">Оформить заказ</h3>
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
              <input
                {...register("Почта", { required: true })}
                placeholder="Почта"
              />
              {errors.Почта && (
                <span className="error">
                  Это поле обязательно для заполнения
                </span>
              )}
              <input
                {...register("Телефон", { required: true })}
                placeholder="Телефон"
              />
              {errors.Телефон && (
                <span className="error">
                  Это поле обязательно для заполнения
                </span>
              )}
              <textarea
                {...register("Комментарии")}
                placeholder="Комментарии"
              />
              <input type="submit" />
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default CheckOut;
