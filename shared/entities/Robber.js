/**
 * @author Samuel Maddock / http://samuelmaddock.com/
 */
 
var Robber = function() {

	this.create();

	this.tile = -1;

};

Robber.prototype = CATAN.ents.create('BaseEntity');

Robber.prototype.setupMesh = function() {

	this.Mesh = new THREE.Mesh( CATAN.getSchema().Robber.geometry, new THREE.MeshBasicMaterial( { color: 0x888888, envMap: CATAN.Game.textureSkybox } ) );
	CATAN.Game.scene.add( this.Mesh );

}

Robber.prototype.setTile = function(tile) {
	this.tile = tile;
	if(CLIENT) {
		this.getMesh().position = new THREE.Vector3(tile.position.x, tile.position.y + 5, tile.position.z);
	}
}

CATAN.ents.register('Robber', Robber);