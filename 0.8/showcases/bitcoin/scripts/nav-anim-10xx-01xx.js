function nav_anim_10xx_01xx(chart, dirLevel) {

    return chart.animate({
        config: {
            channels: {
                y: { set: ['$count'] },
                x: { set: ['Folder level ' + dirLevel] },
                color: { set: null },
                label: { set: ['$count'] },
            },
            title: null,
            legend: null
        },
        style: {
            plot: {
                marker: { label: { position: 'top' } },
                xAxis: { label: { angle: -0.7 } }
            },
            title: {
				paddingTop: null,
				paddingBottom: null
			}
        }
    },
        { duration: 2 }
    );
}
