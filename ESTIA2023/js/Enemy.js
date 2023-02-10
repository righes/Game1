import ObjetGraphique from "./ObjetGraphique.js";

export default class Enemy extends ObjetGraphique {
    constructor(x, y, rayon, couleur, speedX, speedY) {
        super(x, y, 2 * rayon, 2 * rayon, couleur)
        // les propriétés

        this.r = rayon;

        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw(ctx) {
        ctx.save();
        // On dessine une balle circulaire
        ctx.beginPath(); // remet le buffer à zero

        // ajoute l'ordre de dessiner un cercle dans le path
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = this.couleur;
        // Pour dessiner tout le chemin
        ctx.fill();
        ctx.restore();
    };

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    };

}