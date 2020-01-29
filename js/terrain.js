class Terrain {

    // initialisation
    constructor() {
        this.translation = [5.0, 0.0];
        this.rotation = 0;
    }

    // update the helicopter on each frame
    update(deltaTime) {
        check(isNumber(deltaTime));
    }

    // draw the helicopter
    render(gl, worldMatrixUniform, colorUniform) {
        check(isContext(gl), isUniformLocation(worldMatrixUniform, colorUniform));
 
        // set the uniforms
        let matrix = Matrix.trs(this.translation[0], this.translation[1], this.rotation, 1, 1);
        gl.uniformMatrix3fv(worldMatrixUniform, false, matrix);
        
        // draw three houses
        const house1 = Shape.rectangle([this.translation[0] - 4.0, this.translation[1] - 6.0],
                        [this.translation[0] - 4.0, this.translation[1] - 8.0],
                        [this.translation[0], this.translation[1] - 6.0],
                        [this.translation[0], this.translation[1] - 8.0]);


        gl.uniform4fv(colorUniform, [216/255, 95/255, 2/255,1]);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(house1), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLES, 0, house1.length / 2);  

        const house2 = Shape.rectangle([this.translation[0] - 2.0, this.translation[1] + 3.0],
                        [this.translation[0] - 2.0, this.translation[1] + 1.0],
                        [this.translation[0] + 2.0, this.translation[1] + 3.0],
                        [this.translation[0] + 2.0, this.translation[1] + 1.0]);


        gl.uniform4fv(colorUniform, [216/255, 95/255, 2/255,1]);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(house2), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLES, 0, house2.length / 2);   

        const house3 = Shape.rectangle([this.translation[0] - 20.0, this.translation[1] ],
                        [this.translation[0] - 20.0, this.translation[1] - 2.0],
                        [this.translation[0] - 16.0, this.translation[1] ],
                        [this.translation[0] - 16.0, this.translation[1] - 2.0]);


        gl.uniform4fv(colorUniform, [216/255, 95/255, 2/255,1]);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(house3), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLES, 0, house3.length / 2); 



        const house4 = Shape.rectangle([this.translation[0] - 16.0, this.translation[1]+1.0  ],
                        [this.translation[0] - 16.0, this.translation[1] + 3.0],
                        [this.translation[0] - 12.0, this.translation[1] +1.0],
                        [this.translation[0] - 12.0, this.translation[1] + 3.0]);


        gl.uniform4fv(colorUniform, [216/255, 95/255, 2/255,1]);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(house4), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLES, 0, house4.length / 2); 

        const helipad = Shape.rectangle([this.translation[0] - 20.0, this.translation[1] - 2.0],
                        [this.translation[0] - 20.0, this.translation[1] - 6.0],
                        [this.translation[0] - 16.0, this.translation[1] - 2.0],
                        [this.translation[0] - 16.0, this.translation[1] - 6.0]);


        gl.uniform4fv(colorUniform, [0.75, 0.75, 0.75, 1.0]);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(helipad), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLES, 0, helipad.length / 2);

        const helipadSign = [[this.translation[0] - 19.0, this.translation[1] - 2.5, 
                                this.translation[0] - 19.0, this.translation[1] - 5.5], 
                            [this.translation[0] - 19.0, this.translation[1] - 4.0,
                                this.translation[0] - 17.0, this.translation[1] - 4.0], 
                            [this.translation[0] - 17.0, this.translation[1] - 2.5,
                                this.translation[0] - 17.0, this.translation[1] - 5.5]]; 

        gl.uniform4fv(colorUniform, [0.0, 0.0, 0.0, 1.0]);
        helipadSign.forEach(function (event) {
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(event), gl.STATIC_DRAW);
            gl.drawArrays(gl.LINES, 0, event.length / 2);
        });
    }

}