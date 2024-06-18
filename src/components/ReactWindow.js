import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";

const fetchMoreItems = async (startIndex, stopIndex) => {
  // Simulate an API call to fetch more items
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newItems = [];
      for (let i = startIndex; i <= stopIndex; i++) {
        newItems.push(`Item ${i}`);
      }
      resolve(newItems);
    }, 2000);
  });
};

const ReactWindow = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMoreItems(0, 20);
  }, []);

  const loadMoreItems = async (startIndex, stopIndex) => {
    setLoading(true);
    const newItems = await fetchMoreItems(startIndex, stopIndex);
    setItems((prevItems) => [...prevItems, ...newItems]);
    setLoading(false);
  };

  const isItemLoaded = (index) => index < items.length;

  const loadMoreItemsIfNeeded = ({ visibleStartIndex, visibleStopIndex }) => {
    if (!loading && visibleStopIndex > items.length - 10) {
      loadMoreItems(items.length, items.length + 20);
    }
  };
  const ItemRenderer = ({ index, style }) => (
    <div style={style}>{items[index] || "Loading..."}</div>
  );

  return (
    <Card className="custom-card">
        <Card.Header>react-window is a library, for efficiently rendering large lists and tabular data in React applications. It helps by rendering only the visible items in a list, which improves performance when dealing with large datasets.</Card.Header>
      <Card.Body>
        <List
          height={400}
          itemCount={items.length + 1}
          itemSize={35}
          width={600}
          onItemsRendered={loadMoreItemsIfNeeded}
        >
          {ItemRenderer}
        </List>
      </Card.Body>
    </Card>
  );
};

export default ReactWindow;
