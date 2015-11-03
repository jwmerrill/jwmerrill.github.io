//noprotect

function Point(x, y) {
  this.x = x;
  this.y = y;
}

function TraceIllustration(elt, opts) {
  this.containerElt = elt;
  this.curve = opts.curve;
  this.showGuides = !!opts.showGuides;
  this.traceFn = opts.traceFn;
  this.nGuidePoints = 13;

  this.curveCanvas = document.createElement('canvas');
  this.curveCanvas.class = 'curve-canvas';
  this.traceCanvas = document.createElement('canvas');
  this.traceCanvas.class = 'trace-canvas';

  this.curveCanvas.style.position = 'absolute';
  this.traceCanvas.style.position = 'absolute';

  this.curveCtx = this.curveCanvas.getContext('2d');
  this.traceCtx = this.traceCanvas.getContext('2d');

  this.containerElt.appendChild(this.curveCanvas);
  this.containerElt.appendChild(this.traceCanvas);

  this.xsamples = [];
  this.ysamples = [];

  this.attachListeners();
  this.remeasure();
  this.sampleFn();
  this.redrawAll();
};

TraceIllustration.prototype.attachListeners = function () {
  document.addEventListener('mousemove', this.onMove.bind(this));
  window.addEventListener('resize', this.resizeAfterDelay.bind(this));
};

TraceIllustration.prototype.resizeAfterDelay = function () {
  clearTimeout(this.__resizeTimeout);
  this.__resizeTimeout = setTimeout(this.onResize.bind(this), 100);
};

TraceIllustration.prototype.onResize = function () {
  this.remeasure();
  this.sampleFn();
  this.redrawAll();
};

// Math coordinates to canvas coordinates
TraceIllustration.prototype.invmapx = function (x) {
  return x/this.width;
};

// Canvas coordinates to math coordinates
TraceIllustration.prototype.mapy = function (y) {
  // Purposely scaling y by width, not height to make sure
  // that transformation is conformal;
  return this.height/2 - this.width/2*y;
};

function bisectFinite(x0, x1, fn) {
  var xm = (x0 + x1)/2;

  while (x0 < xm && xm < x1) {
    var y0 = fn(x0);
    var y1 = fn(x1);
    var ym = fn(xm)
    if (isFinite(ym) !== isFinite(y0)) {
      x1 = xm;
    } else {
      x0 = xm;
    }
    xm = (x0 + x1)/2;
  }
  if (isFinite(y0)) return x0;
  return x1;
}

TraceIllustration.prototype.sampleFn = function () {
  var fn = function (x) {
    return this.mapy(this.curve(this.invmapx(x)))
  }.bind(this);
  this.xsamples = [];
  this.ysamples = [];
  var lastX = 0;
  var lastY = fn(0);
  for (var x = 0; x <= this.width; x++) {
    var ysample = fn(x);
    if (isFinite(lastY) !== isFinite(ysample)) {
      var xb = bisectFinite(lastX, x, fn);
      this.xsamples.push(xb);
      this.ysamples.push(fn(xb));
    }
    if (isFinite(ysample)) {
      this.xsamples.push(x);
      this.ysamples.push(ysample);
    }
    lastY = ysample;
    lastX = x;
  }
};

TraceIllustration.prototype.drawFn = function () {
  this.curveCtx.beginPath();
  this.curveCtx.moveTo(this.xsamples[0], this.ysamples[0]);
  for (var i = 1; i < this.xsamples.length; i++) {
    this.curveCtx.lineTo(this.xsamples[i], this.ysamples[i]);
  }
  this.curveCtx.stroke();
};

TraceIllustration.prototype.drawAxis = function () {
  this.curveCtx.beginPath();
  this.curveCtx.moveTo(0, Math.floor(this.height/2)+1/2);
  this.curveCtx.lineTo(this.width, Math.floor(this.height/2)+1/2);
  this.curveCtx.stroke();
};

TraceIllustration.prototype.drawGridGuidePoints = function () {
  this.curveCtx.beginPath();
  var nGuidePoints = this.nGuidePoints;
  for (var i = 0.5; i < nGuidePoints; i++) {
    for (var j = 0.5; j < nGuidePoints; j++) {
      var x = i/nGuidePoints*this.width;
      var y = j/nGuidePoints*this.width;
      this.curveCtx.moveTo(x, y);
      this.curveCtx.lineTo(x, y);
    }
  }
  this.curveCtx.stroke();
};

TraceIllustration.prototype.drawGridGuideLines = function () {
  this.curveCtx.beginPath();
  var nGuidePoints = this.nGuidePoints;
  for (var i = 0.5; i < nGuidePoints; i++) {
    for (var j = 0.5; j < nGuidePoints; j++) {
      var x = i/nGuidePoints*this.width;
      var y = j/nGuidePoints*this.width;
      this.curveCtx.moveTo(x, y);
      var tracePoint = this.traceFn(new Point(x, y));
      if (
        !isFinite(tracePoint.x) ||
        !isFinite(tracePoint.y)
      ) continue;

      this.curveCtx.lineTo(tracePoint.x, tracePoint.y);
    }
  }
  this.curveCtx.stroke();
  this.curveCtx.restore();
};

TraceIllustration.prototype.isValidPoint = function (tracePoint) {
  return (
    tracePoint &&
    isFinite(tracePoint.x) &&
    isFinite(tracePoint.y) &&
    tracePoint.x >= 0 &&
    tracePoint.x <= this.width &&
    tracePoint.y >= 0 &&
    tracePoint.y <= this.height
  );
};

TraceIllustration.prototype.drawTracePoint = function (tracePoint) {
  this.traceCtx.beginPath();
  this.traceCtx.moveTo(tracePoint.x, tracePoint.y);
  this.traceCtx.lineTo(tracePoint.x, tracePoint.y);
  this.traceCtx.stroke();
};

TraceIllustration.prototype.drawTraceGuideLine = function (mousePoint, tracePoint) {
  this.traceCtx.beginPath();
  this.traceCtx.moveTo(mousePoint.x, mousePoint.y);
  this.traceCtx.lineTo(tracePoint.x, tracePoint.y);
  this.traceCtx.stroke();
};

TraceIllustration.prototype.remeasure = function () {
  var rect = this.containerElt.getBoundingClientRect();
  this.containerElt.style.height = '' + rect.width + 'px';
  this.curveCanvas.style.width = this.traceCanvas.style.width = '' + rect.width + 'px';
  this.curveCanvas.style.height = this.traceCanvas.style.height = '' + rect.width + 'px';

  var devicePixelRatio = window.devicePixelRatio || 1;
  this.curveCanvas.width = this.traceCanvas.width = this.width = devicePixelRatio*rect.width;
  this.curveCanvas.height = this.traceCanvas.height = this.height = devicePixelRatio*rect.width;
};

TraceIllustration.prototype.redrawAll = function () {
  this.redrawCurveLayer();
  this.redrawTraceLayer();
};

TraceIllustration.prototype.redrawCurveLayer = function () {
  var devicePixelRatio = window.devicePixelRatio || 1;

  this.curveCtx.clearRect(0, 0, this.width, this.height);
  this.curveCtx.lineCap = "butt";
  this.curveCtx.lineWidth = 1;
  this.curveCtx.strokeStyle = "#aaa";
  this.drawAxis();
  this.curveCtx.lineWidth = devicePixelRatio;
  this.curveCtx.strokeStyle = "#C86E6E";
  this.drawFn();
  if (this.showGuides) {
    this.curveCtx.lineCap = "round";
    this.curveCtx.strokeStyle = "#bbb";
    this.curveCtx.lineWidth = 4;
    this.drawGridGuidePoints();
    this.curveCtx.lineCap = "butt";
    this.curveCtx.lineWidth = 1;
    this.drawGridGuideLines();
  }
};

TraceIllustration.prototype.redrawTraceLayer = function (mousePoint, tracePoint) {
  var devicePixelRatio = window.devicePixelRatio || 1;

  this.traceCtx.clearRect(0, 0, this.width, this.height);
  if (!this.isValidPoint(tracePoint)) return;
  this.traceCtx.strokeStyle = "#C86E6E";
  this.traceCtx.lineCap = "round";
  this.traceCtx.lineWidth = devicePixelRatio*6;
  this.drawTracePoint(tracePoint);
  if (this.showGuides && this.isValidPoint(mousePoint)) {
    this.traceCtx.strokeStyle = "#5F81B1";
    this.traceCtx.lineWidth = 2;
    this.drawTraceGuideLine(mousePoint, tracePoint);
  }
};

TraceIllustration.prototype.onResize = function () {
  this.remeasure();
  this.sampleFn();
  this.redrawAll();
};

TraceIllustration.prototype.onMove = function (evt) {
  var rect = this.containerElt.getBoundingClientRect();
  var xOffset = window.pageXOffset;
  var yOffset = window.pageYOffset;
  var devicePixelRation = window.devicePixelRatio || 1;
  var p = new Point(
    devicePixelRatio*(evt.pageX - (rect.left + xOffset)),
    devicePixelRatio*(evt.pageY - (rect.top + yOffset))
  );

  if (p.x < 0 || p.x > this.width || p.y < 0 || p.y > this.height) {
    this.redrawTraceLayer();
  } else {
    this.redrawTraceLayer(p, this.traceFn(p));
  }

};

var curves = {
  sin: function (x) { return 0.6*Math.sin(7*Math.PI*x); },
  halfEllipse: function (x) {
    dx = 5*(x - 1/2);
    return 0.8*Math.sqrt(1 - dx*dx);
  },
  steepLine: function (x) {
    return 20*(x-1/2);
  }
};

function tracePointVertical (p) {
  return new Point(p.x, this.mapy(this.curve(this.invmapx(p.x))));
}

function closestPointOnSegment(p, p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  var dsq = dx*dx + dy*dy;
  var t = ((p.x - p1.x)*dx+(p.y - p1.y)*dy)/dsq;
  if (t < 0) return p1;
  if (t > 1) return p2;
  return new Point((1-t)*p1.x + t*p2.x, (1-t)*p1.y + t*p2.y);
}

function tracePointClosest (p) {
  var closestDsq = Infinity;
  var tracePoint = new Point(NaN, NaN);
  for (var i = 0; i < this.xsamples.length - 1; i++) {
    var pc = closestPointOnSegment(
      p,
      new Point(this.xsamples[i], this.ysamples[i]),
      new Point(this.xsamples[i + 1], this.ysamples[i + 1])
    );
    var dx = p.x - pc.x;
    var dy = p.y - pc.y;
    var dsq = dx*dx + dy*dy;
    if (dsq < closestDsq) {
      tracePoint = pc;
      closestDsq = dsq;
    }
  }
  return tracePoint;
}

var weightPower = 0.4;
function tracePointWeighted (p) {
  var lastDsq = Infinity;
  var pending;

  var leftP = new Point(NaN, NaN);
  var rightP = new Point(NaN, NaN);
  var leftDsq = Infinity;
  var rightDsq = Infinity;

  var dsq, dx, dy, pdx, pdy, pdsq;
  for (var i = 0; i < this.xsamples.length - 1; i++) {
    var pc = closestPointOnSegment(
      p,
      new Point(this.xsamples[i], this.ysamples[i]),
      new Point(this.xsamples[i + 1], this.ysamples[i + 1])
    );
    dx = p.x - pc.x;
    dy = p.y - pc.y;
    dsq = dx*dx + dy*dy;
    if (dsq === 0) {
      return pc;
    } else if (dsq < lastDsq || (isFinite(dsq) && !isFinite(lastDsq))) {
      pending = pc;
    } else if (pending) {
      pdx = p.x - pending.x;
      pdy = p.y - pending.y;
      pdsq = pdx*pdx + pdy*pdy;
      if (pdx > 0) {
        if (pdsq < leftDsq) {
          leftP = pending;
          leftDsq = dsq;
          pending = undefined;
        }
      } else {
        if (pdsq < rightDsq) {
          rightP = pending;
          rightDsq = dsq;
          pending = undefined;
        }
      }
    }
    lastDsq = dsq;
  }
  if (pending) {
    pdx = p.x - pending.x;
    pdy = p.y - pending.y;
    pdsq = pdx*pdx + pdy*pdy;
    if (pdx > 0) {
      if (pdsq < leftDsq) {
        leftP = pending;
        leftDsq = pdsq;
        pending = undefined;
      }
    } else {
      if (pdsq < rightDsq) {
        rightP = pending;
        rightDsq = pdsq;
        pending = undefined;
      }
    }
  }
  var closestPoint = leftDsq < rightDsq ? leftP : rightP;
  var minDsq = Math.min(leftDsq, rightDsq);
  var secondDsq = Math.max(leftDsq, rightDsq);
  var aboveWeight = Math.pow(minDsq/secondDsq, weightPower/2);

  var traceX;
  if (isFinite(leftDsq) && !isFinite(rightDsq)) {
    traceX = leftP.x;
  } else if (isFinite(rightDsq) && !isFinite(leftDsq)) {
    traceX = rightP.x;
  } else {
    traceX = aboveWeight*p.x + (1 - aboveWeight)*closestPoint.x;
  }

  return new Point(traceX, this.mapy(this.curve(this.invmapx(traceX))));
}

var traceTypes = {
  vertical: tracePointVertical,
  closest: tracePointClosest,
  weighted: tracePointWeighted
};

// Create illustrations

new TraceIllustration(document.getElementById('example1-container1'), {
  curve: curves.sin,
  traceFn: traceTypes.vertical
});

new TraceIllustration(document.getElementById('example1-container2'), {
  curve: curves.steepLine,
  traceFn: traceTypes.vertical
});

new TraceIllustration(document.getElementById('example1-container3'), {
  curve: curves.halfEllipse,
  traceFn: traceTypes.vertical
});

new TraceIllustration(document.getElementById('example2-container1'), {
  curve: curves.sin,
  traceFn: traceTypes.closest
});

new TraceIllustration(document.getElementById('example2-container2'), {
  curve: curves.steepLine,
  traceFn: traceTypes.closest
});

new TraceIllustration(document.getElementById('example2-container3'), {
  curve: curves.halfEllipse,
  traceFn: traceTypes.closest
});

new TraceIllustration(document.getElementById('example3-container1'), {
  curve: curves.sin,
  traceFn: traceTypes.closest,
  showGuides: true
});

new TraceIllustration(document.getElementById('example3-container2'), {
  curve: curves.steepLine,
  traceFn: traceTypes.closest,
  showGuides: true
});

new TraceIllustration(document.getElementById('example3-container3'), {
  curve: curves.halfEllipse,
  traceFn: traceTypes.closest,
  showGuides: true
});

var weightedIllustrations = [];
weightedIllustrations[0] = new TraceIllustration(document.getElementById('example4-container1'), {
  curve: curves.sin,
  traceFn: traceTypes.weighted,
  showGuides: true
});

weightedIllustrations[1] = new TraceIllustration(document.getElementById('example4-container2'), {
  curve: curves.steepLine,
  traceFn: traceTypes.weighted,
  showGuides: true
});

weightedIllustrations[2] = new TraceIllustration(document.getElementById('example4-container3'), {
  curve: curves.halfEllipse,
  traceFn: traceTypes.weighted,
  showGuides: true
});

// Weight exponent scrubber
var scrubber = new ScrubberView();
scrubber.min(0).max(2);
var display = document.getElementById('exponent-display');
scrubber.onValueChanged = function (value) {
  weightPower = value;
  for (var i = 0; i < weightedIllustrations.length; i++) {
    weightedIllustrations[i].sampleFn();
    weightedIllustrations[i].redrawAll();
  }
  $(display).mathquill().mathquill('latex', '\\alpha = ' + value);
};
$(document).ready(function () {scrubber.value(weightPower)});
document.getElementById('exponent-scrubber').appendChild(scrubber.elt);

// Show guides checkbox
document.getElementById('show-guides-checkbox').addEventListener('change', function () {
  for (var i = 0; i < weightedIllustrations.length; i++) {
    weightedIllustrations[i].showGuides = this.checked;
    weightedIllustrations[i].redrawAll();
  }
});
