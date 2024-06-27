
/**
 * 生成随机顶部头图地址
 * @param {number|null} index 可选 支持指定数字
 * @returns {string}
 */
function get_random_top_banner(index = null) {

    //图片数量
    const image_count = 165;

    //图片的地址ID数组
    const array_image_src = [
        '6s7vi7kj23pc0dp1kx',
        '6s63e1sj23pc0dp1kx',
        '6rwi5h8j23pc0dp1kx',
        '6ruufvnj23pc0dp1kx',
        '6rqni6nj23pc0dp1kx',
        '6rfy4ejj23pc0dp1kx',
        '6r6ei20j23pc0dp1kx',
        '6qv1dm3j23pc0dp1kx',
        '6qjpcmjj23pc0dp1kx',
        '6qbok4bj23pc0dp1kx',
        '6q0jnphj23pc0dp4qp',
        '6pu9tjjj23pc0dp4qp',
        '6psfj5ij23pc0dp4qp',
        '6pfpryfj23pc0dp4qp',
        '6p5axqqj23pc0dp4qp',
        '6otu46lj23pc0dp4qp',
        '6orho3gj23pc0dp4qp',
        '6opvwz0j23pc0dp4qp',
        '6oe26h6j23pc0dp4qp',
        '6o1fmphj23pc0dp4qp',
        '6nzpdbvj23pc0dp4qp',
        '6ns6hpsj23pc0dp4qp',
        '6ncler5j23pc0dp4qp',
        '6mycm2ij23pc0dp4qp',
        '6mp9eh1j23pc0dp4qp',
        '6mjgxj1j23pc0dp1kx',
        '6m96muwj23pc0dp1kx',
        '6m7lo4uj23pc0dp1kx',
        '6lymivqj23pc0dp1kx',
        '6lwzpuaj23pc0dp1kx',
        '6lkz72yj23pc0dp1kx',
        '6ljftugj23pc0dp1kx',
        '6la0lhlj23pc0dp1kx',
        '6l88oyvj23pc0dp1kx',
        '6kxfcvzj23pc0dp1kx',
        '6kvkgjej23pc0dp1kx',
        '6kkuae1j23pc0dp1kx',
        '6kjb44sj23pc0dp1kx',
        '6k7557mj23pc0dp1kx',
        '6k5n5l7j23pc0dp1kx',
        '6js4kylj23pc0dp4qp',
        '6jqgruuj23pc0dp4qp',
        '6johkl4j23pc0dp4qp',
        '6j90qfnj23pc0dp4qp',
        '6j7d2yyj23pc0dp4qp',
        '6iwqr6dj23pc0dp1kx',
        '6iv33y3j23pc0dp1kx',
        '6itkh68j23pc0dp1kx',
        '6ii9f93j23pc0dp1kx',
        '6igp3zlj23pc0dp1kx',
        '6if51lmj23pc0dp4qp',
        '6i4nzqaj23pc0dp4qp',
        '6i308opj23pc0dp4qp',
        '6i1bivdj23pc0dp4qp',
        '6hqvdhmj23pc0dp4qp',
        '6hp9sx4j23pc0dp1kx',
        '6hnpr5fj23pc0dp1kx',
        '6hbqo1hj23pc0dp1kx',
        '6ha3wbej23pc0dp1kx',
        '6gypkbqj23pc0dp1kx',
        '6gwzrhwj23pc0dp4qp',
        '6gjezwdj23pc0dp4qp',
        '6ghrs3kj23pc0dp4qp',
        '6g7ed5jj23pc0dp4qp',
        '6g53p4jj23pc0dp4qp',
        '6g3jb3bj23pc0dp1kx',
        '6g1z1nxj23pc0dp1kx',
        '6g0fhaoj23pc0dp1kx',
        '6fy39dnj23pc0dp1kx',
        '6fw7ugaj23pc0dp1kx',
        '6ft6sdhj23pc0dpkjl',
        '6fr5tjoj23pc0dpkjl',
        '6fa1gdoj23pc0dpkjl',
        '6f7zgexj23pc0dpkjl',
        '6f5qwooj23pc0dpkjl',
        '6en07fzj23pc0dpkjl',
        '6efp4toj23pc0dpkjl',
        '6e8ve4nj23pc0dpkjl',
        '6e6g2syj23pc0dpkjl',
        '6e4cklhj23pc0dpkjl',
        '6e2awjcj23pc0dpkjl',
        '6dic7orj23pc0dpkjl',
        '6dg7s1kj23pc0dpkjl',
        '6cx25pvj23pc0dpkjl',
        '6cfusyhj23pc0dpkjl',
        '6cduizpj23pc0dpkjl',
        '6c0fe81j23pc0dpkjl',
        '6bmzavhj23pc0dpkjl',
        '6b9c0frj23pc0dpkjl',
        '6awt4pij23pc0dpkjl',
        '6ahfnd6j23pc0dpnpd',
        '6afh3bfj23pc0dpnpd',
        '6a3257pj23pc0dpnpd',
        '6a15cdcj23pc0dpnpd',
        '69n4z54j23pc0dpnpd',
        '699r5y9j23pc0dpkjl',
        '68w70maj23pc0dpkjl',
        '68hs6ydj23pc0dpkjl',
        '6865rcej23pc0dpkjl',
        '67u4brgj23pc0dpkjl',
        '67stp93j23pc0dpqv5',
        '67rdpiyj23pc0dpqv5',
        '67px5rtj23pc0dpqv5',
        '67ohpw4j23pc0dpqv5',
        '67n4k9dj23pc0dpqv5',
        '67l2yiwj23pc0dpqv5',
        '67jaubkj23pc0dpqv5',
        '67hb83qj23pc0dpqv5',
        '67ddnrnj23pc0dpqv5',
        '67bdff0j23pc0dpqv5',
        '66u85swj23pc0dpnpd',
        '66suub3j23pc0dpnpd',
        '66e6ia6j23pc0dpnpd',
        '66cslwrj23pc0dpnpd',
        '65wp2k6j23pc0dpnpd',
        '65vc110j23pc0dpx6p',
        '65kk4e7j23pc0dpx6p',
        '656e278j23pc0dpx6p',
        '654sd2yj23pc0dpx6p',
        '64owghtj23pc0dpx6p',
        '64newbfj23pc0dpnpd',
        '64a1dttj23pc0dpnpd',
        '648h365j23pc0dpnpd',
        '63q1r0mj23pc0dpnpd',
        '63ond2dj23pc0dpnpd',
        '63n1xytj23pc0dpu0x',
        '635xl10j23pc0dpu0x',
        '634l4h4j23pc0dpu0x',
        '62oxh4ej23pc0dpu0x',
        '62no3vaj23pc0dpu0x',
        '628ocbij23pc0dpu0x',
        '62762gxj23pc0dpu0x',
        '6228br2j23pc0dpu0x',
        '62047p8j23pc0dpu0x',
        '61kjvw3j23pc0dpu0x',
        '61iy9frj23pc0dpu0x',
        '6101lyoj23pc0dpu0x',
        '60r9sqgj23pc0dpu0x',
        '606af2pj23pc0dpu0x',
        '5zs3psej23pc0dpu0x',
        '5ze24ykj23pc0dpe81',
        '5zcwvw4j23pc0dpe81',
        '5zbqx1tj23pc0dpe81',
        '5ywu8fmj23pc0dpe81',
        '5ykyes6j23pc0dpe81',
        '5y5mjmij23pc0dpe81',
        '5xr9pkhj23pc0dpe81',
        '5x8az8vj23pc0dpe81',
        '5wup9qhj23pc0dpe81',
        '5wh9verj23pc0dpe81',
        '5w3rsxnj23pc0dpe81',
        '5votqvwj23pc0dpe81',
        '5vnpdtoj23pc0dpe81',
        '5v7t58mj23pc0dpe81',
        '5v3hlgfj23pc0dpe81',
        '5v1ohphj23pc0dpe81',
        '5ulwnzpj23pc0dpe81',
        '5ukqahwj23pc0dpe81',
        '5u4rx9bj23pc0dpe81',
        '5u3coilj23pc0dpe81',
        '5tp13k5j23pc0dpe81',
        '5tnw55xj23pc0dpe81',
        '5tlwhh8j23pc0dpe81',
        '5tkpqh2j23pc0dpe81',
        '5tjjzbdj23pc0dpe81',
    ];


    //如果未指定
    if (index === null) {

        const date = new Date();
        //一年中的第几天
        const day_of_year = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        //当前小时
        const hour_of_Day = date.getHours();
        //除余 图片数量 得出 随机数
        index = (day_of_year + hour_of_Day) % image_count;
    }

    // return 'https://' . Web_Domain::CDN_MIKUCLUB_FUN . '/top/' . $index . '.webp';
    //使用新浪图床
    return 'https://lz.sinaimg.cn/large/8f60527cgy1hov' + array_image_src[index] + '.jpg';


}

export { get_random_top_banner }