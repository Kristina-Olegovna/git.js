function pillars(num_pill, dist, width) {
    if(num_pill > 1){
        return num_pill*width - 2*width + (num_pill-1)*dist/0.01;
    } else {
        return 0;
    }
}