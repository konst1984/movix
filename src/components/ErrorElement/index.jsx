import React from "react";
import cn from "./ErrorElement.module.scss";

const ErrorElement = ({ title, error, isError, children, classname }) => {

  return (
    <>
      {isError ? (
        <div className={`wrapper ${cn["error-wrapper"]} ${classname}`}>
          <h3 className={"title-article"}>{title}</h3>
          <div className={cn.error}>
            <p className={cn.error__text}>
              { error?.response?.data?.status_message ||
                error.message || "Sorry, something went wrong, go back to the main page"}
            </p>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default ErrorElement;
