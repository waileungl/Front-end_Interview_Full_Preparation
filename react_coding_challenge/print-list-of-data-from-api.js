import React, { useState, useCallback } from "react";
import classnames from "classnames";
// you should import `lodash` as a whole module
import lodash from "lodash";
import axios from "axios";

const ITEMS_API_URL = "https://example.com/api/items";
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete(props) {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = (inputValue) => {
    if (inputValue) {
      setLoading(true);
      axios.get(ITEMS_API_URL, { params: { q: inputValue } }).then((res) => {
        setItems(res.data);
        setLoading(false);
      });
    } else {
      setItems([]);
    }
  };
  const debounceFn = useCallback(lodash.debounce(loadData, DEBOUNCE_DELAY), []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    debounceFn(e.target.value);
  };

  return (
    <div className="wrapper">
      <div
        className={classnames({
          control: true,
          loading: loading
        })}
      >
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      {!loading && items.length > 0 && (
        <div className="list is-hoverable">
          {items.map((item) => {
            return (
              <a
                className="list-item"
                onLoad={props.onSelectedItem(item)}
                onClick={() => alert(item)}
                key={item}
              >
                {item}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
