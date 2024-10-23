export default {
    data: {
        anime: 'none',
        list: [
            {
                id: "3",
                x: '200px',
                anime: 'none'
            },
            {
                id: "4",
                x: '300px',
                anime: 'none'
            }
        ],
    },
    onInit() {

    },
    move() {
        this.anime = 'test';
    },
    move2() {
        this.list = this.list.map(it => {
            it.anime = 'test';
            return it;
        });
    }
}
