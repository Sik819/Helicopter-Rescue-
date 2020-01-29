class Rain {
	    // initialisation
    constructor() {
        this.translation = [0.0, 0.0];
        this.rotation = 0;
        this.scale = Math.random() * 0.25;
    }

    update(deltaTime) {
        check(isNumber(deltaTime));
        
        if (this.scale > 0.05){
        	this.scale -= 0.2 * deltaTime;
        }
        else {
        	this.translation = [(Math.random() * 20.0) - 10.0, (Math.random() * 20.0) - 10.0];
        	this.scale = Math.random() * 0.25;
        }
    }

    render(gl, worldMatrixUniform, colorUniform) {
        check(isContext(gl), isUniformLocation(worldMatrixUniform, colorUniform));
 
        let matrix = Matrix.trs(this.translation[0], this.translation[1], this.rotation, this.scale, this.scale);
        gl.uniformMatrix3fv(worldMatrixUniform, false, matrix);
        gl.uniform4fv(colorUniform, [0.2, 0.2, 0.8, 1.0]);

        const vertices = Shape.circle(30);

      
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, vertices.length / 2);    
    }
}