# 享元模式(Flyweight Pattern)

- 被共享的单元，意图是复用对象，节省内存
- 前提是享元对象是不可变对象

## 应用场景

1. 当一个系统中存在大量的重复对象
2. 对于相似对象，可以将这些对象中相同的部分提取出来

## 实际案例

### 1. 棋牌游戏，棋子类

```ts
// 一个游戏厅有成千上万个房间，每个房间对应一个棋局，棋局要保存每个棋子的数据
// 棋子的数据有棋子类型，棋子颜色，棋子在棋局中的位置

// 享元类
class ChessPieceUnit {
  constructor(id, text, color) {
    this.id = id;
    this.text = text;
    this.color = color;
  }
}
class ChessPieceUnitFactory {
  static map = {
    1: new ChessPieceUnit(1, '车', COLOR.BLACK),
    2: new ChessPieceUnit(2, '马', COLOR.BLACK),
    // 31...
  };
  static getChessPiece(chessPieceId) {
    return map[chessPieceId];
  }
}
class ChessPiece {
  constructor(unit, posX, posY) {
    this.chessPieceUnit = unit;
    this.posX = posX;
    this.posY = posY;
  }
}
class ChessBoard {
  constructor() {
    this.chessPieces = {
      1: new ChessPiece(ChessPieceUnitFactor.getChessPiece(1), 0, 0)
      2: new ChessPiece(ChessPieceUnitFactor.getChessPiece(2), 1, 0)
    }
  }
  move(chessPieceId, toPosX, toPosY) {}
}
```

### 2. 文本编辑器，样式类

```ts
// 共享文字的格式，一个文本文件中，用到的字体格式不会太多
class CharacterStyle {
  constructor(font, size, colorRGB) {}
  equals(o) {}
}
class CharacterStyleFactory {
  static styles = new Map();
  getStyle(font, size, colorRGB) {
    const newStyle = new CharacterStyle(font, size, colorRGB);
    for (const style of styles) {
      if (style.equals(newStyle)) return style;
    }
    styles.add(newStyle);
    return newStyle;
  }
}
class Character {
  constructor(c, style) {}
}
class Editor {
  chars = [];
  appendCharacter(c, font, size, colorRBG) {
    const character = new Character(
      c,
      CharacterStyleFactory.getStyle(font, size, colorRGB),
    );
    chars.push(character);
  }
}
```
