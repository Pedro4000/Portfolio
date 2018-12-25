var firstactive=false;
var firstactive2=false;

function init() {
    var c = document.getElementById('draw2');
    return c.getContext('2d');
}
function init2() {
    var c = document.getElementById('draw');
    return c.getContext('2d');
}
function init3() {
    var c = document.getElementById('draw3');
    return c.getContext('2d');
}
function init4() {
    var c = document.getElementById('draw4');
    return c.getContext('2d');
}
function init5() {
    var c = document.getElementById('draw5');
    return c.getContext('2d');
}
function init6() {
    var c = document.getElementById('draw6');
    return c.getContext('2d');
}
function init7() {
    var c = document.getElementById('draw7');
    return c.getContext('2d');
}
function init8() {
    var c = document.getElementById('draw8');
    return c.getContext('2d');
}


function clear(ctx) {
    ctx.clearRect(0, 0, 200, 200);
}

function PercentAnimation(ctx, percent) {
    this.ctx = ctx;
    this.speed = 4;
    this.x = 100;
    this.y = 100;
    this.radius = 64;
    
    this.setPercent = function(percent) {
        this.degrees = 360 * (percent / 100);
        this._animationOffset = this.degrees;
        this.percent = percent;
    };
    
    // Part of initialization
    this.setPercent(percent);

    this.startAnimation = function() {
        var self = this;
        clear(this.ctx);
        this._interval = setInterval(function() {
            self.drawAnimation();
        }, 10);
    };

    this.drawArc = function() {
        var startDegrees = -140;
        var endDegrees = startDegrees + this.degrees - this._animationOffset;
        // Degrees to radians
        var startAngle = startDegrees / 180 * Math.PI;
        var endAngle = endDegrees / 180 * Math.PI;
        // Draw arc
        this.setLineStyles();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, startAngle, endAngle, false);
        ctx.stroke();
        this.drawText();
    };

    this.setLineStyles = function() {
        ctx.strokeStyle = 'rgb(255, 51, 0)';
        ctx.lineWidth = 10;
        ctx.lineCap="round";
    };

    this.drawAnimation = function() {
        if (this._animationOffset < 0) {
            this._animationOffset = 0;
        }
        clear(this.ctx);
        this.drawArc();
        this._animationOffset -= this.speed;
        if (this._animationOffset < 0) {
            clearInterval(this._interval);
        }
    };

    this.drawText = function() {
        ctx.fillStyle = "#ddd";
        ctx.font = "bold 16px verdana";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';

    };

};



/**
 * Test PercentageAnimation
 */
$(window).scroll(function(){

    if( $(window).scrollTop() > 1600){

    if(firstactive===false)
    {
        firstactive=true;
    

        $(document).ready(function() {
            var ctx = init();
            var percentage = 85;
            var anim = new PercentAnimation(ctx, percentage);
            anim.startAnimation();

            $('#test-form').submit(function(e) {
                e.preventDefault();
                var percent = Math.floor(Math.random() * 101);
                anim.setPercent(percent);
                anim.startAnimation();
            });
        });

        $(document).ready(function() {
            var ctx2 = init2();
            var percentage2 = 75;
            var anim = new PercentAnimation(ctx2, percentage2);
            anim.startAnimation();

            $('#test-form').submit(function(e) {
                e.preventDefault();
                var percent = Math.floor(Math.random() * 101);
                anim.setPercent(percent);
                anim.startAnimation();
            });
        });

        $(document).ready(function() {
            var ctx2 = init2();
            var percentage2 = 95;
            var anim = new PercentAnimation(ctx2, percentage2);
            anim.startAnimation();

            $('#test-form').submit(function(e) {
                e.preventDefault();
                var percent = Math.floor(Math.random() * 101);
                anim.setPercent(percent);
                anim.startAnimation();
            });
        });


        $(document).ready(function() {
            var ctx = init3();
            var percentage = 85;
            var anim = new PercentAnimation(ctx, percentage);
            anim.startAnimation();

            $('#test-form').submit(function(e) {
                e.preventDefault();
                var percent = Math.floor(Math.random() * 101);
                anim.setPercent(percent);
                anim.startAnimation();
            });
        });

        $(document).ready(function() {
            var ctx = init4();
            var percentage = 90;
            var anim = new PercentAnimation(ctx, percentage);
            anim.startAnimation();

            $('#test-form').submit(function(e) {
                e.preventDefault();
                var percent = Math.floor(Math.random() * 101);
                anim.setPercent(percent);
                anim.startAnimation();
            });
        });

        $(document).ready(function() {
            var ctx = init5();
            var percentage = 95;
            var anim = new PercentAnimation(ctx, percentage);
            anim.startAnimation();

            $('#test-form').submit(function(e) {
                e.preventDefault();
                var percent = Math.floor(Math.random() * 101);
                anim.setPercent(percent);
                anim.startAnimation();
            });
        });
        $(document).ready(function() {
            var ctx = init6();
            var percentage = 80;
            var anim = new PercentAnimation(ctx, percentage);
            anim.startAnimation();

            $('#test-form').submit(function(e) {
                e.preventDefault();
                var percent = Math.floor(Math.random() * 101);
                anim.setPercent(percent);
                anim.startAnimation();
            });
        });
        $(document).ready(function() {
            var ctx = init7();
            var percentage = 40;
            var anim = new PercentAnimation(ctx, percentage);
            anim.startAnimation();

            $('#test-form').submit(function(e) {
                e.preventDefault();
                var percent = Math.floor(Math.random() * 101);
                anim.setPercent(percent);
                anim.startAnimation();
            });
        });
        $(document).ready(function() {
            var ctx = init8();
            var percentage = 50;
            var anim = new PercentAnimation(ctx, percentage);
            anim.startAnimation();

            $('#test-form').submit(function(e) {
                e.preventDefault();
                var percent = Math.floor(Math.random() * 101);
                anim.setPercent(percent);
                anim.startAnimation();
            });
        });
    }

}

});


$(window).scroll(function()
{
    if( $(window).scrollTop() > 2600)
    {
        $(document).ready(function()
        {
            if(firstactive2==false)
            {
                firstactive2=true;
                console.log($(window).scrollTop());
                $("#projects-image").fadeIn("slow");

            }
        });
    }
});