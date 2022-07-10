import { useStoreGame } from "@/stores/game.js";

export const game = function () {
  // Store Game API
  const store = useStoreGame();

  // Const
  const directions = ["up", "right", "down", "left"];
  const vectors = {
    up: { x: 0, y: -1 },
    right: { x: 1, y: 0 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
  };

  const eachCell = function (method) {
    for (const x of Array(store.size).keys()) {
      for (const y of Array(store.size).keys()) {
        method({ x, y });
      }
    }
  };

  const getTileIndex = function (cell) {
    return store.tiles.findIndex(
      (tile) => cell.x === tile.x && cell.y === tile.y
    );
  };

  const getTile = function (cell) {
    return store.tiles.find((tile) => cell.x === tile.x && cell.y === tile.y);
  };

  const isCellAvailable = function (cell) {
    return !getTile(cell);
  };

  const getAvailableCells = function () {
    // Setup cells
    let cells = [];

    // Iterate over each cell
    eachCell((cell) => {
      // Check if available
      if (isCellAvailable(cell)) {
        // Add value to array
        cells = [...cells, cell];
      }
    });

    return cells;
  };

  const isWithinBounds = function (cell) {
    return (
      0 <= cell.x && cell.x < store.size && 0 <= cell.y && cell.y < store.size
    );
  };

  const getNextCell = function (cell, vector) {
    return {
      x: cell.x + vector.x,
      y: cell.y + vector.y,
    };
  };

  // eslint-disable-next-line no-unused-vars
  const getPrevCell = function (cell, vector) {
    return {
      x: cell.x - vector.x,
      y: cell.y - vector.y,
    };
  };

  const isTileMatchAvailable = function () {
    // Iterate over each tile
    for (const tile of store.tiles) {
      // Itetare over each direction
      for (const direction of directions) {
        // Setup vector
        const vector = vectors[direction];

        // Setup next cell
        const nextCell = getNextCell(tile, vector);

        // Check if within bounds
        if (isWithinBounds(nextCell)) {
          // Setup next tile
          const nextTile = getTile(nextCell);

          // Check if next tile
          if (nextTile && tile.points === nextTile.points) {
            // Return truthy value
            return true;
          }
        }
      }
    }
  };

  const getRandomAvailableCell = function () {
    // Setup available cells
    const cells = getAvailableCells();

    // Setup random cell
    const randomCell = cells.length
      ? cells[Math.floor(Math.random() * cells.length)]
      : null;

    return randomCell;
  };

  const addRandomTile = function () {
    // Setup random cell
    const cell = getRandomAvailableCell();

    // Check if cell exists
    if (cell) {
      store.addTile({ ...cell, points: Math.random() < 0.9 ? 2 : 4 });
    }
  };

  const move = function (direction) {
    // Clean tile
    for (const tile of store.tiles) {
      // Setup tile index
      const index = getTileIndex(tile);

      if (tile.toRemove) store.removeTile(index);
      else store.replaceTile(index, { ...tile, merged: false });
    }

    // Setup vector
    const vector = vectors[direction];

    // Iterate over each cell
    eachCell(({ x, y }) => {
      // Setup cell
      const cell = { x, y };

      // Invert order of scanning if going right or down
      if (direction === "right") cell.x = store.size - 1 - cell.x;
      if (direction === "down") cell.y = store.size - 1 - cell.y;

      // Setup tile index
      const tileIndex = getTileIndex(cell);

      // Setup tile
      const tile = store.tiles[tileIndex];

      // Check if tile exists
      if (tile) {
        // Setup next cell
        let nextCell = getNextCell(tile, vector);

        // Move the cell until
        while (isWithinBounds(nextCell) && isCellAvailable(nextCell)) {
          nextCell = getNextCell(nextCell, vector);
        }

        // Setup previous cell
        const prevCell = getPrevCell(nextCell, vector);

        // Setup next tile index
        const nextTileIndex = getTileIndex(nextCell);

        // Setup next tile
        const nextTile = store.tiles[nextTileIndex];

        // Setup is meargeable boolean
        const isMergeable =
          nextTile &&
          !nextTile.merged &&
          !nextTile.toRemove &&
          nextTile.points === tile.points;

        // Check if next tile exists
        if (isMergeable) {
          // Update tile
          store.replaceTile(tileIndex, {
            ...tile,
            ...nextCell,
            toRemove: true,
          });

          // Update next tile
          store.replaceTile(nextTileIndex, { ...nextTile, toRemove: true });

          // Setup new tile
          const newTile = {
            ...nextCell,
            merged: true,
            points: tile.points * 2,
          };

          // Add new tile
          store.addTile(newTile);
        }

        // Otherwise
        else if (tile.x !== prevCell.x || tile.y !== prevCell.y) {
          // Setup new tile
          const newTile = { ...tile, ...prevCell };

          // Update tile
          store.replaceTile(tileIndex, newTile);
        }
      }
    });
  };

  return {
    // Methods
    eachCell,
    getAvailableCells,
    isTileMatchAvailable,
    move,
    addRandomTile,
  };
};
