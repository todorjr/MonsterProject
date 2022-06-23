const app = Vue.createApp({
  data() {
    return {
      lost: false,
      monster: "monster.jpeg",
      player: "player.jpeg",
      playerHealth: 100,
      monsterHealth: 100,
      playerValue: Math.floor(Math.random() * (12 - 5) + 5),
      monsterValue: Math.floor(Math.random() * (18 - 8) + 8), // random number between 8 and 18
    };
  },
  watch: {
    lost() {
      this.lost = true;
    },
  },
  methods: {
    attackTheMonster() {
      this.monsterHealth -= this.playerValue;
      this.attackThePlayer();
    },
    attackThePlayer() {
      this.playerHealth -= this.monsterValue;
    },
    specialAttack() {
      this.monsterHealth -= 20;
    },
    heal() {
      this.playerHealth += 2;
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      }
    },
    surrender() {
      this.playerHealth = 0;
    },
  },
});

app.mount("#game");
