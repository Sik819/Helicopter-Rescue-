class Shape {

    static rectangle(vertexTopLeft, vertexTopRight, vertexBottomLeft, vertexBottomRight){
        const vertices = [vertexTopLeft[0], vertexTopLeft[1],
                            vertexTopRight[0], vertexTopRight[1],
                            vertexBottomLeft[0], vertexBottomLeft[1],
                            vertexBottomRight[0], vertexBottomRight[1],
                            vertexTopRight[0], vertexTopRight[1],
                            vertexBottomLeft[0], vertexBottomLeft[1]];

        return vertices;
    }

    static circle(nSides){
    	const points = new Float32Array(nSides * 2);
		const theta = 2 * Math.PI / nSides;
    	
    	for (let i = 0; i < nSides; i++) {
        	points[2*i] = Math.cos(i * theta);
        	points[2*i+1] = Math.sin(i * theta);
    	}

    	return points;
  	}
}