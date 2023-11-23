import React from "react";
import cx from "classnames";
import "./results.scss";

const removeUnderscores = str => str.replace(/_/g, ' ');

const getName = ({name, activeCollection}) => activeCollection.name.toLowerCase().includes('kids') ? removeUnderscores(name) : name;

const Results = ({
  score,
  activeCollection,
  getActiveCat,
  backToMenu,
  finalAnswers
}) => {
  return (
    <div className="Staging">
      <p className="Score">Score: {score}</p>
      <ul className="Results-list">
        {finalAnswers.map(({ name, status }) => (
          <li
            key={name}
            className={cx("Results", {
              "Results--skip": status === "skip"
            })}
          >
            {getName({name, activeCollection})}
          </li>
        ))}
      </ul>
      <div className="Results-btnWrap">
        {activeCollection.list.size > 0 && (
          <button
            className="Results-btn Results-btn--go"
            onClick={() => {
              getActiveCat({cat: activeCollection});
            }}
          >
            Play deck again
          </button>
        )}
        <button
          className="Results-btn"
          onClick={() => {
            backToMenu();
          }}
        >
          New Category
        </button>
      </div>
    </div>
  );
};

export default Results;
