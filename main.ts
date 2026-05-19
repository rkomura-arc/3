scene.onOverlapTile(SpriteKind.Player, assets.tile`チェスト_開いてない`, function (sprite, location) {
    stage += 1
    init_stege(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`ブロック1`)) {
        mySprite.vy = -200
    }
})
function init_stege (stege: number) {
    if (stege == 0) {
        tiles.setCurrentTilemap(tilemap`レベル_1`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 10))
    } else if (stege == 1) {
        tiles.setCurrentTilemap(tilemap`レベル_2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 10))
    }
}
let mySprite: Sprite = null
let stage = 0
mySprite = sprites.create(assets.image`いぬたぬき_右`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(6)
scene.setBackgroundImage(assets.image`背景`)
mySprite.ay = 500
init_stege(1)
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`バネ`)) {
        mySprite.vy = -300
    }
})
