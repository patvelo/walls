scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    pause(10)
    Zufallszahl = randint(1, 200)
    tiles.setWallAt(tiles.getTileLocation(Zufallszahl, 5), false)
    tiles.setTileAt(tiles.getTileLocation(8, 5), sprites.vehicle.roadHorizontal)
    tiles.setWallAt(tiles.getTileLocation(8, 5), true)
    tiles.setTileAt(tiles.getTileLocation(9, 5), sprites.vehicle.roadHorizontal)
    tiles.setWallAt(tiles.getTileLocation(9, 5), true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadVertical, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadHorizontal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    pause(10)
    Zufallszahl = randint(3, 4)
    tiles.setWallAt(tiles.getTileLocation(12, Zufallszahl), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.over(true)
})
let Zufallszahl = 0
tiles.setTilemap(tiles.createTilemap(hex`10001000080a0a03000000000000000000000000080a0a03000000000000000000000000080a0a02040404040404040404040410080a0a0a0a0a0a0a0a0a0a0a0c0a0f01080a0a0a0a0a0a0a0a0a0a0a0c0a0f01080b0b06090909070a0a060909090e11080a0a03000000080a0a030000000000080a0a03000000080a0a030000000000080a0a03000000080a0a030000000000080a0a03000000080a0a010000000000080a0a03000000080a0a010000000000080a0a03000000080a0a030000000000080a0a02040404050d0d030000000000080a0a0a0a0a0a0a0a0a030000000000080a0a0a0a0a0a0a0a0a03000000000012090909090909090909110000000000`, img`
    2 2 2 2 . . . . . . . . . . . . 
    2 . . 2 . . . . . . . . . . . . 
    2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . 2 . . . . . 2 . . . 2 . . 2 
    2 . . . 2 . . . . . 2 . 2 . . 2 
    2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . 2 2 . . . 2 . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 2 . 2 . . . 2 . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 . 2 2 . . . 2 . . 2 . . . . . 
    2 . . 2 2 2 2 2 2 2 2 . . . . . 
    2 2 . . . 2 . . . . 2 . . . . . 
    2 . . 2 . . . 2 . . 2 . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorLight0,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,myTiles.tile2,sprites.dungeon.greenOuterNorth1,sprites.dungeon.chestOpen,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest], TileScale.Sixteen))
pause(10)
let Läufer = sprites.create(img`
    . . f f f . . 
    . . f f f . . 
    . . . f . . . 
    f f f f f f f 
    . . . f . . . 
    . . . f . . . 
    . . . f . . . 
    . f f f f f . 
    . f f . f f . 
    . f f . f f . 
    . f f . f f . 
    . f f . f f . 
    `, SpriteKind.Player)
Läufer.setPosition(30, 20)
controller.moveSprite(Läufer, 33, 27)
pause(10)
scene.cameraFollowSprite(Läufer)
pause(10)
Zufallszahl = randint(1, 200)
if (Zufallszahl % 2 == 0) {
    Zufallszahl = 8
} else {
    Zufallszahl = 9
}
pause(10)
tiles.setWallAt(tiles.getTileLocation(Zufallszahl, 12), false)
