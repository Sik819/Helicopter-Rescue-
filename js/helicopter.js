class Helicopter {

    // initialisation
    constructor() {
        this.translation = [0,0];
        this.rotation = 0;
        this.scale = 0.75;

        this.tailTranslation = [-1.0,0.0];

        this.moveSpeed = 5.0;
        this.rotateSpeed = 2.0;

        this.rotorFrontRotation = 0.0; 
        this.rotorRotateSpeed = 8.0;
    }

    getpos() {
        return this.translation;
       }

    update(deltaTime) {
        check(isNumber(deltaTime));

        //rotate
        if (Input.leftPressed) {
            this.rotation += (Math.PI / 180) * this.rotateSpeed;
        }
        else if (Input.rightPressed) {
            this.rotation -= (Math.PI / 180) * this.rotateSpeed;
        }

        //move
        else if (Input.upPressed) {
        	this.translation[0] += Math.cos(this.rotation) * this.moveSpeed * deltaTime;
        	this.translation[1] += Math.sin(this.rotation) * this.moveSpeed * deltaTime;
        }

        this.rotorFrontRotation += (Math.PI / 180) * this.rotorRotateSpeed;
    }

    // draw the helicopter
    render(gl, worldMatrixUniform, colorUniform) {
        check(isContext(gl), isUniformLocation(worldMatrixUniform, colorUniform));
 
        let matrix = Matrix.trs(this.translation[0], this.translation[1], 
        						this.rotation, 
        						0.5, 0.5);
        gl.uniformMatrix3fv(worldMatrixUniform, false, matrix);
        gl.uniform4fv(colorUniform, [1.0, 1.0, 0.0, 1.0]);

        const body = Shape.circle(50);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(body), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, body.length / 2);

       matrix = Matrix.trs(this.translation[0], this.translation[1], 
        					this.rotation, 
        					0.5, 0.5);
        gl.uniformMatrix3fv(worldMatrixUniform, false, matrix);
        gl.uniform4fv(colorUniform, [0, 0, 0, 1.0]);

	  const tail = [-1.5,0.75, -0.5,0.0, -1.5,-0.75];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tail), gl.STATIC_DRAW);
        gl.drawArrays(gl.TRIANGLES, 0, tail.length / 2);

        matrix = Matrix.trs(this.translation[0], this.translation[1], 
        					this.rotorFrontRotation, 
        					1.15, 1.15);
        gl.uniformMatrix3fv(worldMatrixUniform, false, matrix);
        gl.uniform4fv(colorUniform, [0.0, 0.0, 0.0, 1]);
         
        const rotorFront1 = [0.0,0.0, -0.5,0.0];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(rotorFront1), gl.STATIC_DRAW);
        gl.drawArrays(gl.LINES, 0, rotorFront1.length / 2);    

        const rotorFront2 = [0.0,0.0, 0.5,0.0];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(rotorFront2), gl.STATIC_DRAW);
        gl.drawArrays(gl.LINES, 0, rotorFront2.length / 2);  

        const rotorFront3 = [0.0,0.0, 0.0,-0.5];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(rotorFront3), gl.STATIC_DRAW);
        gl.drawArrays(gl.LINES, 0, rotorFront3.length / 2); 
              
        const rotorFront4 = [0.0,0.0, 0.0,0.5];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(rotorFront4), gl.STATIC_DRAW);
        gl.drawArrays(gl.LINES, 0, rotorFront4.length / 2);               
    }
}