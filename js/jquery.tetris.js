$.fn.tetris = function(options) {

    options = $.extend({
        width: 10,
        height: 22,
        cellSize: 30,
        speed: 1,
        speedDecrease: 40,
        speedDecreaseLevel: 10,
        minSpeed: 75,
        backgroundColor: '#000000',
        strokeColor: '#030314',
        errorColor: '#FF0000',
        overlaySelector: '.overlay',
        scoreSelector: '.score',
        speedSelector: '.speed',
        canvasSelector: '.canvas-map',
        canvasNextPieceSelector: '.canvasNextPiece',
        ufoSelector: '.ufo',
        balloonSelector: '.balloon',
        resultsSelector: '.results',
        playPauseSelector: '.play-pause',
        playPauseTouchButton: '.touch-pause-button'

    }, options);

    return this.each(function() {

        var iBlock = {
            blocks: [
                [
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0]
                ]
            ],
            startPosition: {
                x: 5,
                y: 1
            },
            number: 1,
            color: '#ff6138'
        };

        var jBlock = {
            blocks: [
                [
                    [1, 0, 0, 0],
                    [1, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 1, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [1, 1, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [1, 1, 0, 0],
                    [0, 0, 0, 0]
                ]
            ],
            startPosition: {
                x: 5,
                y: 2
            },
            number: 2,
            color: '#876b35'
        };

        var lBlock = {
            blocks: [
                [
                    [0, 0, 1, 0],
                    [1, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [1, 1, 1, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [1, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ]
            ],
            startPosition: {
                x: 5,
                y: 2
            },
            number: 3,
            color: '#6b8d35'
        };

        var oBlock = {
            blocks: [
                [
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ]
            ],
            startPosition: {
                x: 5,
                y: 2
            },
            number: 4,
            color: '#276868'
        };

        var sBlock = {
            blocks: [
                [
                    [0, 1, 1, 0],
                    [1, 1, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 1, 1, 0],
                    [1, 1, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [1, 0, 0, 0],
                    [1, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ]
            ],
            startPosition: {
                x: 5,
                y: 2
            },
            number: 5,
            color: '#ffd34e'
        };

        var tBlock = {
            blocks: [
                [
                    [0, 1, 0, 0],
                    [1, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [1, 1, 1, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 0, 0],
                    [1, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ]
            ],
            startPosition: {
                x: 5,
                y: 2
            },
            number: 6,
            color: '#962D3E'
        };

        var zBlock = {
            blocks: [
                [
                    [1, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 1, 0],
                    [0, 1, 1, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [1, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 0, 0],
                    [1, 1, 0, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0]
                ]
            ],
            startPosition: {
                x: 5,
                y: 2
            },
            number: 7,
            color: '#773B6A'
        };

        var pieceWidth = 4;
        var pieceHeight = 4;

        var pieces = [
            iBlock,
            jBlock,
            lBlock,
            oBlock,
            sBlock,
            tBlock,
            zBlock
        ];

        var map = [];
        var mapRealWidth = options.width + 4;
        var mapRealHeight = options.height + 4;

        function createMap() {

            map = new Array(mapRealHeight);

            for (var y = 0; y < mapRealHeight; y++) {

                map[y] = new Array(mapRealWidth);

                for (var x = 0; x < mapRealWidth; x++) {

                    map[y][x] = 0;

                }

            }

        }

        var currentPiece = {};
        var randomCurrentPiece;
        var randomNextPiece;
        var firstPiece = true;

        function randomPiece() {

            if (firstPiece) {

                randomNextPiece = Math.floor(Math.random() * (pieces.length));
                randomCurrentPiece = Math.floor(Math.random() * (pieces.length));
                firstPiece = false;

            } else {

                randomCurrentPiece = randomNextPiece;
                randomNextPiece = Math.floor(Math.random() * (pieces.length));

            }

            nextPieceOnCanvas();

            currentPiece = {
                position: {
                    x: pieces[randomCurrentPiece].startPosition.x,
                    y: pieces[randomCurrentPiece].startPosition.y
                },
                prevPosition: {
                    x: pieces[randomCurrentPiece].startPosition.x,
                    y: pieces[randomCurrentPiece].startPosition.y
                },
                rotation: 0,
                blockType: pieces[randomCurrentPiece]
            };

            if (checkEnd()) {

                end();

            } else {

                pieceOnMap();
                pieceOnCanvas();
                startInterval(realSpeed);

            }

        }

        function checkEnd() {

            for (var y = 0; y < pieceHeight; y++) {

                for (var x = 0; x < pieceWidth; x++) {

                    if (currentPiece.blockType.blocks[currentPiece.rotation][y][x] == 1) {

                        var point = map[y + currentPiece.position.y][x + currentPiece.position.x];

                        if ((point >= 2) && (point <= 8)) {

                            return true;

                        }

                    }

                }

            }

        }

        var isEnd = false;

        function end() {

            play = false;
            isEnd = true;
            pieceErrorOnMap();
            pieceErrorOnCanvas();

            setTimeout(function() {

                drawResults();

            }, 1000);

        }

        function drawResults() {

            $(options.overlaySelector).find(options.playPauseSelector).hide();
            $(options.overlaySelector).addClass('active').find(options.resultsSelector).show().find(options.scoreSelector).text(score);

        }

        function clearPieceOnMap() {

            for (var y = 0; y < pieceHeight; y++) {

                for (var x = 0; x < pieceWidth; x++) {

                    var point = map[y + currentPiece.prevPosition.y][x + currentPiece.prevPosition.x]

                    if ((point < 2) || (point > 8)) {

                        map[y + currentPiece.prevPosition.y][x + currentPiece.prevPosition.x] = 0;

                    }

                }

            }

        }

        function pieceOnMap() {

            clearPieceOnMap();

            for (var y = 0; y < pieceHeight; y++) {

                for (var x = 0; x < pieceWidth; x++) {

                    var point = map[y + currentPiece.position.y][x + currentPiece.position.x];

                    if ((point < 2) || (point > 8)) {

                        map[y + currentPiece.position.y][x + currentPiece.position.x] = currentPiece.blockType.blocks[currentPiece.rotation][y][x];

                    }

                }

            }

        }

        function pieceErrorOnMap() {

            clearPieceOnMap();

            for (var y = 0; y < pieceHeight; y++) {

                for (var x = 0; x < pieceWidth; x++) {

                    if (currentPiece.blockType.blocks[currentPiece.rotation][y][x] == 1) {

                        map[y + currentPiece.position.y][x + currentPiece.position.x] = 'x';

                    }

                }

            }

        }

        function freezePieceOnMap() {

            for (var y = 0; y < pieceHeight; y++) {

                for (var x = 0; x < pieceWidth; x++) {

                    if (currentPiece.blockType.blocks[currentPiece.rotation][y][x] == 1) {

                        map[y + currentPiece.position.y][x + currentPiece.position.x] = (currentPiece.blockType.number + 1);

                    }
                }

            }

        }

        var $canvasElement = $(this).find(options.canvasSelector);
        var canvasMap = $canvasElement[0].getContext('2d');
        var canvasOffsetLeft;
        var canvasOffsetTop;

        function drawCanvas() {

            $canvasElement.attr('width', options.width * options.cellSize);
            $canvasElement.attr('height', options.height * options.cellSize);

            canvasMap.fillStyle = options.backgroundColor;
            canvasMap.fillRect(0, 0, options.width * options.cellSize, options.height * options.cellSize);

            canvasMap.strokeStyle = options.strokeColor;
            canvasMap.lineWidth = 1;

            canvasOffsetLeft = $canvasElement.offset().left;
            canvasOffsetTop = $canvasElement.offset().top;

        }

        var $canvasNextPieceElement = $(this).find(options.canvasNextPieceSelector);
        var canvasNextPieceMap = $canvasNextPieceElement[0].getContext('2d');

        function drawCanvasNextPiece() {

            $canvasNextPieceElement.attr('width', pieceWidth * options.cellSize);
            $canvasNextPieceElement.attr('height', pieceHeight * options.cellSize);

            canvasNextPieceMap.fillStyle = options.backgroundColor;
            canvasNextPieceMap.fillRect(0, 0, options.width * options.cellSize, options.height * options.cellSize);

            canvasNextPieceMap.strokeStyle = options.strokeColor;
            canvasNextPieceMap.lineWidth = 1;

        }

        function clearPieceOnCanvas() {

            for (var y = 0; y < pieceHeight; y++) {

                for (var x = 0; x < pieceWidth; x++) {

                    var point = map[y + currentPiece.prevPosition.y][x + currentPiece.prevPosition.x];

                    if ((point < 2) || (point > 8)) {

                        canvasMap.fillStyle = options.backgroundColor;
                        canvasMap.fillRect((x + currentPiece.prevPosition.x - 2) * options.cellSize, (y + currentPiece.prevPosition.y - 2) * options.cellSize, options.cellSize, options.cellSize);

                    }

                }

            }

        }

        function pieceOnCanvas() {

            clearPieceOnCanvas();

            for (var y = 0; y < pieceHeight; y++) {

                for (var x = 0; x < pieceWidth; x++) {

                    var point = map[y + currentPiece.position.y][x + currentPiece.position.x];

                    if ((point >= 2) && (point <= 8)) {

                        canvasMap.fillStyle = pieces[point - 2].color;
                        canvasMap.fillRect((x + currentPiece.position.x - 2) * options.cellSize, (y + currentPiece.position.y - 2) * options.cellSize, options.cellSize, options.cellSize);
                        canvasMap.strokeRect((x + currentPiece.position.x - 2) * options.cellSize + 2, (y + currentPiece.position.y - 2) * options.cellSize + 2, options.cellSize - 4, options.cellSize - 4);

                    } else if (point == 1) {

                        canvasMap.fillStyle = currentPiece.blockType.color;
                        canvasMap.fillRect((x + currentPiece.position.x - 2) * options.cellSize, (y + currentPiece.position.y - 2) * options.cellSize, options.cellSize, options.cellSize);
                        canvasMap.strokeRect((x + currentPiece.position.x - 2) * options.cellSize + 2, (y + currentPiece.position.y - 2) * options.cellSize + 2, options.cellSize - 4, options.cellSize - 4);

                    } else if (point == 0) {

                        canvasMap.fillStyle = options.backgroundColor;
                        canvasMap.fillRect((x + currentPiece.position.x - 2) * options.cellSize, (y + currentPiece.position.y - 2) * options.cellSize, options.cellSize, options.cellSize);

                    }

                }

            }

        }

        function pieceErrorOnCanvas() {

            for (var y = 0; y < pieceHeight; y++) {

                for (var x = 0; x < pieceWidth; x++) {

                    var point = map[y + currentPiece.position.y][x + currentPiece.position.x];

                    if (point == 'x') {

                        canvasMap.shadowColor = options.errorColor;
                        canvasMap.shadowBlur = options.cellSize;
                        canvasMap.shadowOffsetX = 0;
                        canvasMap.shadowOffsetY = 0;

                        canvasMap.fillStyle = options.errorColor;
                        canvasMap.fillRect((x + currentPiece.position.x - 2) * options.cellSize, (y + currentPiece.position.y - 2) * options.cellSize, options.cellSize, options.cellSize);
                        canvasMap.strokeRect((x + currentPiece.position.x - 2) * options.cellSize + 2, (y + currentPiece.position.y - 2) * options.cellSize + 2, options.cellSize - 4, options.cellSize - 4);

                    }

                }

            }

        }

        function nextPieceOnCanvas() {

            for (var y = 0; y < pieceHeight; y++) {

                for (var x = 0; x < pieceWidth; x++) {

                    var point = pieces[randomNextPiece].blocks[0][y][x];

                    canvasNextPieceMap.fillStyle = options.backgroundColor;
                    canvasNextPieceMap.fillRect(x * options.cellSize, y * options.cellSize, options.cellSize, options.cellSize);

                    if (point == 1) {

                        canvasNextPieceMap.fillStyle = pieces[randomNextPiece].color;
                        canvasNextPieceMap.fillRect(x * options.cellSize, y * options.cellSize, options.cellSize, options.cellSize);
                        canvasNextPieceMap.strokeRect(x * options.cellSize + 2, y * options.cellSize + 2, options.cellSize - 4, options.cellSize - 4);

                    }

                }

            }

        }

        var x_direct = [-1, 0, 1, 0];
        var y_direct = [0, -1, 0, 1];

        function movement() {

            $(document).keydown(function(event) {

                switch (event.which) {

                    case 38:
                        if (play) {
                            setRotate()
                        };
                        return false;
                        break;
                    case 40:
                        if (play) {
                            setDirection(3)
                        };
                        return false;
                        break;
                    case 39:
                        if (play) {
                            setDirection(2)
                        };
                        return false;
                        break;
                    case 37:
                        if (play) {
                            setDirection(0)
                        };
                        return false;
                        break;
                    case 80:
                        if (!isEnd) {
                            startPause()
                        };
                        return false;
                        break;

                }

            });

        }

        function movementTouch() {

            $("body").swipe({

                swipeLeft: function(event, direction, distance, duration, fingerCount) {
                    if (play) {
                        setDirection(0)
                    };
                },

                swipeRight: function(event, direction, distance, duration, fingerCount) {
                    if (play) {
                        setDirection(2)
                    };
                },

                swipeDown: function(event, direction, distance, duration, fingerCount) {
                    if (play) {
                        setDirection(3)
                    };
                },

                swipeUp: function(event, direction, distance, duration, fingerCount) {
                    if (play) {
                        setRotate()
                    };
                },

                threshold: 20

            });

            $(options.playPauseTouchButton).click(function() {
                if (!isEnd) {
                    startPauseTouch()
                };
            })

        }

        var border;

        function rightPosition(newX, newY, rotation) {

            for (var y = 0; y < pieceHeight; y++) {

                for (var x = 0; x < pieceWidth; x++) {

                    if (currentPiece.blockType.blocks[rotation][y][x] == 1) {

                        if ((x + newX) >= (options.width + 2)) {

                            border = 'right';
                            return 'border';

                        } else if ((x + newX) <= 1) {

                            border = 'left';
                            return 'border';

                        } else if ((y + newY) <= 1) {

                            border = 'top';
                            return 'border';

                        } else if ((y + newY) >= (options.height + 2)) {

                            border = 'bottom';
                            return 'border';

                        }

                        var point = map[y + newY][x + newX]

                        if ((point >= 2) && (point <= 8)) {

                            return 'piece';

                        }

                    }

                }

            }

        }

        var currentPiecePositionXForEye;
        var currentPiecePositionYForEye;

        function updateCurrentPiecePositionForEye() {

            currentPiecePositionXForEye = (currentPiece.position.x * options.cellSize) + canvasOffsetLeft;
            currentPiecePositionYForEye = (currentPiece.position.y * options.cellSize) + canvasOffsetTop;
            $(window).trigger("updateEyePosition");

        }

        function setDirection(dir) {

            var newX = currentPiece.position.x + x_direct[dir];
            var newY = currentPiece.position.y + y_direct[dir];

            var rightPositionValue = rightPosition(newX, newY, currentPiece.rotation);

            if (rightPositionValue !== 'border') {

                if (rightPositionValue !== 'piece') {

                    currentPiece.prevPosition.x = currentPiece.position.x;
                    currentPiece.prevPosition.y = currentPiece.position.y;

                    currentPiece.position.x += x_direct[dir];
                    currentPiece.position.y += y_direct[dir];

                    pieceOnMap();
                    pieceOnCanvas();

                } else {

                    if (dir == 3) {

                        stick();

                    }

                }

            } else {

                if (border == 'bottom') {

                    stick();

                }

            }

            updateCurrentPiecePositionForEye();

        }

        function setRotate() {

            if (currentPiece.rotation < 3) {

                var nextPosition = currentPiece.rotation + 1;

            } else {

                var nextPosition = 0;

            }

            var rightPositionValue = rightPosition(currentPiece.position.x, currentPiece.position.y, nextPosition);

            if (rightPositionValue !== 'border') {

                if (rightPositionValue !== 'piece') {

                    currentPiece.rotation = nextPosition;
                    pieceOnMap();
                    pieceOnCanvas();

                }

            }

        }

        function stick() {

            clearInterval(timer);
            freezePieceOnMap();
            checkLines();
            randomPiece();

        }

        var lines = new Array(mapRealHeight);

        function checkLines() {

            for (var y = 0; y < mapRealHeight; y++) {

                lines[y] = 0;

                for (var x = 0; x < mapRealWidth; x++) {

                    if ((map[y][x] >= 2) && (map[y][x] <= 8)) {

                        lines[y]++;

                    }

                }

            }

            deleteLines();

        }

        var redraw;
        var count;
        var score = 0;
        var level = 1;

        function deleteLines() {

            redraw = false;

            for (var y = mapRealHeight - 1, count = 0; y >= 0; --y) {

                if (lines[y] >= options.width) {

                    redraw = true;
                    ++count;
                    ++score;
                    increaseLevel();

                } else {

                    for (var x = 0; x < mapRealWidth; x++) {

                        map[y + count][x] = map[y][x];

                    }

                }

            }

            for (y = 0; y < count; ++y) {

                for (var x = 0; x < mapRealWidth; x++) {

                    map[y][x] = 0;

                }

            }

            if (redraw) {

                pointMessage(count);
                updateInformation();
                redrawCanvas();

            }

        }

        function redrawCanvas() {

            for (var y = 0; y < options.height; y++) {

                for (var x = 0; x < options.width; x++) {

                    var point = map[y + 2][x + 2];

                    if ((point >= 2) && (point <= 8)) {

                        canvasMap.fillStyle = pieces[point - 2].color;
                        canvasMap.fillRect(x * options.cellSize, y * options.cellSize, options.cellSize, options.cellSize);
                        canvasMap.strokeRect(x * options.cellSize + 2, y * options.cellSize + 2, options.cellSize - 4, options.cellSize - 4);

                    } else if (point == 1) {

                        canvasMap.fillStyle = currentPiece.blockType.color;
                        canvasMap.fillRect(x * options.cellSize, y * options.cellSize, options.cellSize, options.cellSize);
                        canvasMap.strokeRect(x * options.cellSize + 2, y * options.cellSize + 2, options.cellSize - 4, options.cellSize - 4);

                    } else if (point == 0) {

                        canvasMap.fillStyle = options.backgroundColor;
                        canvasMap.fillRect(x * options.cellSize, y * options.cellSize, options.cellSize, options.cellSize);

                    }

                }

            }

        }

        function updateInformation() {

            $(options.scoreSelector).find('.value').text(score);
            $(options.speedSelector).find('.value').text(options.speed);

        }

        var beginSpeed = options.speedDecrease * 9 + options.minSpeed;
        var realSpeed = beginSpeed - (options.speed - 1) * options.speedDecrease;

        function increaseSpeed() {

            var nextSpeed = beginSpeed - options.speed * options.speedDecrease;

            if (nextSpeed >= options.minSpeed) {

                realSpeed = nextSpeed;
                options.speed++;
                speedMessage = true;

            }

        }

        function increaseLevel() {

            if (score >= level * options.speedDecreaseLevel) {

                level++;
                increaseSpeed();

            }

        }

        var timer;

        function startInterval(time) {

            timer = setInterval(function() {

                setDirection(3);

            }, time);

        }

        function startPause() {

            if (play == true) {

                play = false;
                clearInterval(timer);
                $(options.overlaySelector).find('.glyphicon').removeClass('glyphicon-play').addClass('glyphicon-pause');
                $(options.overlaySelector).addClass('active');


            } else {

                play = true;
                startInterval(realSpeed);
                $(options.overlaySelector).find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');
                $(options.overlaySelector).removeClass('active');

            }

        }

        function startPauseTouch() {

            if (play == true) {

                play = false;
                clearInterval(timer);
                $(options.playPauseTouchButton).find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');


            } else {

                play = true;
                startInterval(realSpeed);
                $(options.playPauseTouchButton).find('.glyphicon').removeClass('glyphicon-play').addClass('glyphicon-pause');

            }

        }

        var xForEye = $(options.ufoSelector).offset().left + 39;
        var yForEye = $(options.ufoSelector).offset().top + 23;

        function drawEye(eyecontainer, pupil, eyeposx, eyeposy, eyer, x, y, pupilHeight, pupilWidth) {

            $(options.ufoSelector).append("<div class='" + eyecontainer + "'><div class='" + pupil + "'></div></div>");

            eyecontainer = "." + eyecontainer;
            pupil = "." + pupil;

            $(eyecontainer).css({
                left: eyeposx,
                top: eyeposy
            });
            $(pupil).css({
                width: pupilWidth,
                height: pupilHeight
            });
            $(eyecontainer).css({
                width: eyer,
                height: eyer
            });
            $(pupil).css({
                position: 'relative',
                'border-radius': '50%'
            });
            $(eyecontainer).css({
                position: 'absolute',
                overflow: 'hidden',
                'border-radius': '50%'
            });

            // Initialise core variables
            var r = $(pupil).width() / 2;
            var center = {
                x: $(eyecontainer).width() / 2 - r,
                y: $(eyecontainer).height() / 2 - r
            };

            var distanceThreshold = $(eyecontainer).width() / 2 - r;
            var positionX = center.x,
                positionY = center.y;

            $(window).on("updateEyePosition", function() {

                var d = {
                    x: currentPiecePositionXForEye - r - x - center.x,
                    y: currentPiecePositionYForEye + pieceHeight - r - y - center.y
                };

                var distance = Math.sqrt(d.x * d.x + d.y * d.y);

                if (distance < distanceThreshold) {

                    positionX = currentPiecePositionXForEye - x - r;
                    positionY = currentPiecePositionYForEye - y - r;

                } else {

                    positionX = d.x / distance * distanceThreshold + center.x;
                    positionY = d.y / distance * distanceThreshold + center.y;

                }

                $(pupil).css({
                    left: positionX + 'px',
                    top: positionY + 'px'
                });

            });

        };

        var speedMessage = false;
        var balloonLongerActivity = false;

        function pointMessage(point) {

            var align = 'left';

            if (!speedMessage) {

                if (point == 1) {

                    var message = 'You got ' + point + ' point.';

                } else {

                    var message = 'You got ' + point + ' points.';

                }

                align = 'center';

            } else {

                if (point == 1) {

                    var message = 'You got ' + point + ' point and increased speed to ' + options.speed + '.';

                } else {

                    var message = 'You got ' + point + ' points and increased speed to ' + options.speed + '.';
                }

                align = 'left';
                speedMessage = false;

            }

            $(options.balloonSelector).css({
                'text-align': align
            }).find('p').text(message);

            if (!$(options.balloonSelector).hasClass('active')) {

                $(options.balloonSelector).addClass('active');

            } else {

                balloonLongerActivity = true;

            }

            setTimeout(function() {

                if (!balloonLongerActivity) {

                    $(options.balloonSelector).removeClass('active');

                } else {

                    balloonLongerActivity = false;

                }

            }, 2000);

        }

        var play;

        function init() {

            play = true;
            createMap();
            drawCanvas();
            drawCanvasNextPiece();
            randomPiece();
            movement();
            if (Modernizr.touch) {
                movementTouch();
            }
            updateInformation();

            drawEye("eye-container", "eye", 40, 26, 40, xForEye, yForEye, 26, 26);
            updateCurrentPiecePositionForEye();

        }

        init();

    });

}

var loop;

function drawFollowEye(eyecontainer, pupil, eyeposx, eyeposy, eyer, x, y, pupilHeight, pupilWidth) {

    $(".ufo").append("<div class='" + eyecontainer + "'><div class='" + pupil + "'></div></div>");

    eyecontainer = "." + eyecontainer;
    pupil = "." + pupil;

    $(eyecontainer).css({
        left: eyeposx,
        top: eyeposy
    });
    $(pupil).css({
        width: pupilWidth,
        height: pupilHeight
    });
    $(eyecontainer).css({
        width: eyer,
        height: eyer
    });
    $(pupil).css({
        position: 'relative',
        'border-radius': '50%'
    });
    $(eyecontainer).css({
        position: 'absolute',
        overflow: 'hidden',
        'border-radius': '50%'
    });

    // Initialise core variables
    var r = $(pupil).width() / 2;
    var center = {
        x: $(eyecontainer).width() / 2 - r,
        y: $(eyecontainer).height() / 2 - r
    };

    var distanceThreshold = $(eyecontainer).width() / 2 - r;
    var mouseX = center.x,
        mouseY = center.y;

    // Listen for mouse movement
    $(window).mousemove(function(e) {

        var d = {
            x: e.pageX - r - x - center.x,
            y: e.pageY - r - y - center.y
        };

        var distance = Math.sqrt(d.x * d.x + d.y * d.y);

        if (distance < distanceThreshold) {

            mouseX = e.pageX - x - r;
            mouseY = e.pageY - y - r;

        } else {

            mouseX = d.x / distance * distanceThreshold + center.x;
            mouseY = d.y / distance * distanceThreshold + center.y;

        }
    });

    // Update pupil location
    var pupil = $(pupil);
    var xp = center.x,
        yp = center.y;

    loop = setInterval(function() {

        // change 1 to alter damping/momentum - higher is slower
        xp += (mouseX - xp) / 5;
        yp += (mouseY - yp) / 5;
        pupil.css({
            left: xp,
            top: yp
        });

    }, 5);

};


$(document).ready(function() {

    var x = $('.ufo').offset().left + 39;
    var y = $('.ufo').offset().top + 23;
    drawFollowEye("eye-container", "eye", 40, 26, 40, x, y, 26, 26);

    $('.start').click(function(e) {

        e.preventDefault();

        $(window).unbind('mousemove');
        $(".ufo").find('.eye-container').remove();
        $(".ufo").find('.eye').remove();
        clearInterval(loop);

        $('#game1').find('.canvas-map').css({
            display: 'inline-block'
        });
        $('#game1').tetris();
        $('#game1').find('.canvasNextPiece').show();

        $(this).hide();

    });

    function containerHeight() {

        var windowHeight = $(window).height();
        $('.game').css({
            height: windowHeight + 'px'
        });

    }

    containerHeight();

    $(window).resize(function() {

        containerHeight();

    });

    function getRandomInt(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    function randomStars() {

        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

        $('.star').each(function() {

            var pointX = getRandomInt(0, (windowWidth - 4))
            var pointY = getRandomInt(0, (windowHeight - 4))
            var opacityValue = Math.random();

            $(this).css({
                top: pointY + 'px'
            });
            $(this).css({
                left: pointX + 'px'
            });
            $(this).css({
                opacity: opacityValue
            });

        });

    }

    randomStars();

});
