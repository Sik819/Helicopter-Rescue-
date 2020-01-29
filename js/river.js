class River {

    constructor() {
        this.translation = [0.0, 0.0];
        this.rotation = 0;
    }

    update(deltaTime) {
        check(isNumber(deltaTime));
    }

    render(gl, worldMatrixUniform, colorUniform) {
        check(isContext(gl), isUniformLocation(worldMatrixUniform, colorUniform));
 
        let matrix = Matrix.trs(this.translation[0], this.translation[1], this.rotation, 1, 1);
        gl.uniformMatrix3fv(worldMatrixUniform, false, matrix);
        gl.uniform4fv(colorUniform, [0.0, 0.4, 0.8, 1.0]);

        const vertices = Shape.rectangle([this.translation[0], this.translation[1] + 10.0],
                            [this.translation[0] + 8.0, this.translation[1] + 10.0],
                            [this.translation[0] - 4.0, this.translation[1] - 10.0],
                            [this.translation[0] + 4.0, this.translation[1] - 10.0,]);

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 2);     
    }

}