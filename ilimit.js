$(document)['ready'](function() {
    if ($('#blogid')['attr']('href') != '/') {
        $('body')['html']('<div id=\"no-active\">القالب غير مرخص , لتشغيله راسلنا<br /><a href=\"https://www.facebook.com/Roussafi.Omar\">هنا</a></div>')
    };
    if ($('#blogid')['attr']('href') == '/') {
        $(document)['ready'](function() {
            var _0xe8b6x1 = [, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            $('#related-posts')['each'](function() {
                var _0xe8b6x2 = $(this),
                    _0xe8b6x3 = $(this)['find']('.related-l')['text']()['replace'](/\r?\n|\r/g, '');
                $['ajax']({
                    url: '/feeds/posts/default/-/' + _0xe8b6x3 + '?alt=json-in-script&max-results=3',
                    type: 'get',
                    dataType: 'jsonp',
                    success: function(_0xe8b6x3) {
                        var _0xe8b6x4 = '';
                        _0xe8b6x4 += '<div class=\\'
                        multi - post\\ '>';
                        for (var _0xe8b6x5 = '', _0xe8b6x6 = 0; _0xe8b6x6 < _0xe8b6x3['feed']['entry']['length']; _0xe8b6x6++) {
                            for (var _0xe8b6x7 = 0; _0xe8b6x7 < _0xe8b6x3['feed']['entry'][_0xe8b6x6]['link']['length']; _0xe8b6x7++) {
                                if ('alternate' == _0xe8b6x3['feed']['entry'][_0xe8b6x6]['link'][_0xe8b6x7]['rel']) {
                                    _0xe8b6x5 = _0xe8b6x3['feed']['entry'][_0xe8b6x6]['link'][_0xe8b6x7]['href'];
                                    break
                                }
                            };
                            var _0xe8b6x8 = _0xe8b6x3['feed']['entry'][_0xe8b6x6]['title']['$t'],
                                _0xe8b6x9 = _0xe8b6x3['feed']['entry'][_0xe8b6x6]['author'][0]['name']['$t'],
                                _0xe8b6xa = _0xe8b6x3['feed']['entry'][_0xe8b6x6]['thr$total']['$t'],
                                _0xe8b6xb = _0xe8b6x3['feed']['entry'][_0xe8b6x6]['published']['$t'],
                                _0xe8b6xc = _0xe8b6x3['feed']['entry'][_0xe8b6x6]['content']['$t'];
                            if ($('<div>')['html'](_0xe8b6xc), void((0)) !== _0xe8b6x3['feed']['entry'][_0xe8b6x6]['category']) {
                                var _0xe8b6xd = _0xe8b6x3['feed']['entry'][_0xe8b6x6]['category'][0]['term']
                            };
                            if (_0xe8b6xc['indexOf']('<img') !== -1 || _0xe8b6xc['indexOf']('youtube.com/embed') !== -1) {
                                var _0xe8b6xe = _0xe8b6x3['feed']['entry'][_0xe8b6x6]['media$thumbnail']['url']
                            };
                            if (void((0)) !== _0xe8b6xe) {
                                if (_0xe8b6xe['match']('default.jpg')) {
                                    var _0xe8b6xf = _0xe8b6xe['replace']('/default.jpg', '/mqdefault.jpg')
                                };
                                if (_0xe8b6xe['match']('s72-c')) {
                                    var _0xe8b6xf = _0xe8b6xe['replace']('s72-c', 's480')
                                }
                            };
                            var _0xe8b6x10 = '<div class=\"post-thumbnail\"><img src=\"' + _0xe8b6xf + '\"/></div>',
                                _0xe8b6x11 = '<h3 class=\\'
                            mpost - title truncate\\ '><a href=\\'
                            ' + _0xe8b6x5 + '\\
                            '>' + _0xe8b6x8 + '</a></h3>',
                                _0xe8b6x12 = '<a href=\\' / search / label / ' + _0xe8b6xd + '\\
                            ' class=\\'
                            waves - effect waves - light btn\\ '>' + _0xe8b6xd + '</a>';
                            _0xe8b6x4 += '<li class=\\'
                            mulpost z - depth - 2\\ '>' + _0xe8b6x10 + '<div class=\\'
                            label - content\\ '>' + _0xe8b6x12 + '<br />' + _0xe8b6x11 + '</div></li>'
                        };
                        _0xe8b6x4 += '</div>', _0xe8b6x2['html'](_0xe8b6x4)
                    }
                })
            })
        });
        $(document)['ready'](function(_0xe8b6x13) {
            _0xe8b6x13('.card__share > a')['on']('click', function(_0xe8b6x5) {
                _0xe8b6x5['preventDefault']();
                _0xe8b6x13(this)['parent']()['find']('div')['toggleClass']('card__social--active');
                _0xe8b6x13(this)['toggleClass']('share-expanded')
            })
        });
        $(document)['ready'](function() {
            $('.parallax')['parallax']();
            $('.button-collapse')['sideNav']();
            $('.modal')['modal']();
            $('#modal1')['modal']('open');
            $('#modal1')['modal']('close');
            $('.dowload-mat')['appendTo']('#dowload-ill')
        });
        $('.sidebar-wrapper .PopularPosts ul li')['addClass']('first z-depth-4'), $('.sidebar-wrapper h2')['wrap']('<div class=\\'
                widget - title\\ '></div>'), $('.image')['wrap']('<div class=\\'
                featimg\\ '></div>'), $('.featimg')['each'](function() {
                $(this)['parent']()['find']('h3')['before']($(this))
            }), jQuery(document)['ready'](function(_0xe8b6x1) {
                _0xe8b6x1('.post-summary h3, .post-summary p')['wrapAll']('<div class=\"featcont\" />')
            }), $(function() {
                $('.parallax-container')['appendTo']('#cover-post')
            }),
            function(_0xe8b6x1) {
                _0xe8b6x1('.sidebar-wrapper .PopularPosts img')['attr']('src', function(_0xe8b6x1, _0xe8b6x2) {
                    return _0xe8b6x2['replace']('/default.jpg', '/mqdefault.jpg')
                })['attr']('src', function(_0xe8b6x1, _0xe8b6x2) {
                    return _0xe8b6x2['replace']('w72-h72', 'w720-h720')
                }), _0xe8b6x1('.sidebar-wrapper .PopularPosts .widget-content ul li')['each'](function() {
                    var _0xe8b6x2 = _0xe8b6x1(this),
                        _0xe8b6x3 = _0xe8b6x1(this)['find']('.item-title a'),
                        _0xe8b6x4 = (_0xe8b6x3['attr']('href'), _0xe8b6x1(this)['find']('.item-thumbnail a img')['attr']('src')),
                        _0xe8b6x5 = _0xe8b6x1(this)['find']('.item-thumbnail a'),
                        _0xe8b6x6 = _0xe8b6x1(this)['find']('.item-thumbnail');
                    _0xe8b6x5['css']('background-image', 'url(' + _0xe8b6x4 + ')')['empty'](), _0xe8b6x6['prependTo'](_0xe8b6x2), _0xe8b6x1['get'](_0xe8b6x3['attr']('href'), function(_0xe8b6x2) {
                        _0xe8b6x3['parent']()
                    }, 'html')
                })
            }(jQuery);
        ! function(_0xe8b6x10) {
            _0xe8b6x10['fn']['moderntube'] = function() {
                return this['each'](function() {
                    var _0xe8b6x9 = _0xe8b6x10(this),
                        _0xe8b6xe = _0xe8b6x9['find']('iframe[src*=\"youtube.com\"]');
                    _0xe8b6xe['attr']('height', '')['attr']('width', '');
                    var _0xe8b6x8 = _0xe8b6x10(this)['width'](),
                        _0xe8b6x14 = 480 * _0xe8b6x8 / 853;
                    _0xe8b6xe['attr']('height', _0xe8b6x14)['attr']('width', '100%'), _0xe8b6x10(window)['bind']('resize load', function() {
                        var _0xe8b6x10 = _0xe8b6x9['width'](),
                            _0xe8b6x8 = 480 * _0xe8b6x10 / 853;
                        _0xe8b6xe['attr']('height', _0xe8b6x8)['attr']('width', '100%')
                    })
                })
            }
        }(jQuery), $('.post-body')['moderntube']();
        $(document)['ready'](function() {
            $('.main-wrapper, .sidebar-wrapper')['theiaStickySidebar']({
                additionalMarginTop: 30,
                additionalMarginBottom: 30
            })
        }), $(document)['ready'](function() {
            $('.item .post-footer')['theiaStickySidebar']({
                additionalMarginTop: 10,
                additionalMarginBottom: 10
            })
        })
    }
});
$(document)['ready'](function() {
    var _0xe8b6x1 = $('.quickedit')['attr']('href'),
        _0xe8b6x1 = _0xe8b6x1['substring'](35, 54),
        _0xe8b6x2 = _0xe8b6x1['substring'](0, 1),
        _0xe8b6x3 = _0xe8b6x1['substring'](1, 2),
        _0xe8b6x4 = _0xe8b6x1['substring'](2, 3),
        _0xe8b6x5 = _0xe8b6x1['substring'](3, 4),
        _0xe8b6x6 = _0xe8b6x1['substring'](4, 5),
        _0xe8b6x7 = _0xe8b6x1['substring'](5, 6),
        _0xe8b6x8 = _0xe8b6x1['substring'](6, 7),
        _0xe8b6x9 = _0xe8b6x1['substring'](7, 8),
        _0xe8b6xa = _0xe8b6x1['substring'](8, 9),
        _0xe8b6xb = _0xe8b6x1['substring'](9, 10),
        _0xe8b6x15 = _0xe8b6x1['substring'](10, 11),
        _0xe8b6x16 = _0xe8b6x1['substring'](11, 12),
        _0xe8b6x14 = _0xe8b6x1['substring'](12, 13),
        _0xe8b6x17 = _0xe8b6x1['substring'](13, 16),
        _0xe8b6xc = _0xe8b6x1['substring'](16, 19),
        _0xe8b6xd = '20' + _0xe8b6xb + '4208' + _0xe8b6x3 + '94886' + _0xe8b6x15 + _0xe8b6x7 + '09' + _0xe8b6x9 + '43' + _0xe8b6x14 + '54' + _0xe8b6x8 + '90' + _0xe8b6x6 + '3536' + _0xe8b6xa + '8712' + _0xe8b6x2 + '329' + _0xe8b6x4 + '246' + _0xe8b6x16 + '04253' + _0xe8b6x2 + '53044' + _0xe8b6x5 + '2235' + _0xe8b6x17 + '21252' + _0xe8b6x9 + '005' + _0xe8b6x8 + '25' + _0xe8b6x2 + '310' + _0xe8b6x4 + '02' + _0xe8b6x7 + '10' + _0xe8b6xc + '70' + _0xe8b6x15 + '72575' + _0xe8b6x17 + '8100' + _0xe8b6x14 + '5342' + _0xe8b6x5 + '8585' + _0xe8b6xa + '72411' + _0xe8b6xb + '00' + _0xe8b6x16 + _0xe8b6x5 + _0xe8b6x4 + _0xe8b6x15 + _0xe8b6xc + _0xe8b6x17 + _0xe8b6x14 + _0xe8b6x16 + _0xe8b6xa + _0xe8b6x4 + '1555';
    $('#activeblog')['text']() != _0xe8b6xd && $('body')['html']('<div id=\"no-active\">القالب غير مرخص , لتشغيله راسلنا<br /><a href=\"http://www.picalica.com/u/Roussafi4Design/\">من هنا</a></div>')
});
$(document)['ready'](function() {
    if ($('.quickedit')['attr']('href') == '') {
        window['location']['href'] = 'http://www.picalica.com/u/Roussafi4Design/'
    };
    if ($('.quickedit')['html']() == '') {
        window['location']['href'] = 'http://www.picalica.com/u/Roussafi4Design/'
    };
    var _0xe8b6x1 = $('.quickedit')['attr']('href'),
        _0xe8b6x1 = _0xe8b6x1['substring'](35, 54),
        _0xe8b6x2 = _0xe8b6x1['substring'](0, 1),
        _0xe8b6x3 = _0xe8b6x1['substring'](1, 2),
        _0xe8b6x4 = _0xe8b6x1['substring'](2, 3),
        _0xe8b6x5 = _0xe8b6x1['substring'](3, 4),
        _0xe8b6x6 = _0xe8b6x1['substring'](4, 5),
        _0xe8b6x7 = _0xe8b6x1['substring'](5, 6),
        _0xe8b6x8 = _0xe8b6x1['substring'](6, 7),
        _0xe8b6x9 = _0xe8b6x1['substring'](7, 8),
        _0xe8b6xa = _0xe8b6x1['substring'](8, 9),
        _0xe8b6xb = _0xe8b6x1['substring'](9, 10),
        _0xe8b6x15 = _0xe8b6x1['substring'](10, 11),
        _0xe8b6x16 = _0xe8b6x1['substring'](11, 12),
        _0xe8b6x14 = _0xe8b6x1['substring'](12, 13),
        _0xe8b6x17 = _0xe8b6x1['substring'](13, 16),
        _0xe8b6xc = _0xe8b6x1['substring'](16, 19),
        _0xe8b6xd = '20' + _0xe8b6xb + '4208' + _0xe8b6x3 + '94886' + _0xe8b6x15 + _0xe8b6x7 + '09' + _0xe8b6x9 + '43' + _0xe8b6x14 + '54' + _0xe8b6x8 + '90' + _0xe8b6x6 + '3536' + _0xe8b6xa + '8712' + _0xe8b6x2 + '329' + _0xe8b6x4 + '246' + _0xe8b6x16 + '04253' + _0xe8b6x2 + '53044' + _0xe8b6x5 + '2235' + _0xe8b6x17 + '21252' + _0xe8b6x9 + '005' + _0xe8b6x8 + '25' + _0xe8b6x2 + '310' + _0xe8b6x4 + '02' + _0xe8b6x7 + '10' + _0xe8b6xc + '70' + _0xe8b6x15 + '72575' + _0xe8b6x17 + '8100' + _0xe8b6x14 + '5342' + _0xe8b6x5 + '8585' + _0xe8b6xa + '72411' + _0xe8b6xb + '00' + _0xe8b6x16 + _0xe8b6x5 + _0xe8b6x4 + _0xe8b6x15 + _0xe8b6xc + _0xe8b6x17 + _0xe8b6x14 + _0xe8b6x16 + _0xe8b6xa + _0xe8b6x4 + '1555';
    $('#activeblog')['text']() != _0xe8b6xd && $('body')['html']('<div id=\"no-active\">القالب غير مرخص , لتشغيله راسلنا<br /><a href=\"http://www.picalica.com/u/Roussafi4Design/\">من هنا</a></div>')
});

function slider(_0xe8b6x1) {
    document['write']('<ul class=\\'
        pposts\\ '>');
    for (var _0xe8b6x2 = 0; _0xe8b6x2 < _0xe8b6x1['feed']['entry']['length']; _0xe8b6x2++) {
        for (var _0xe8b6x3 = _0xe8b6x1['feed']['entry'][_0xe8b6x2], _0xe8b6x4 = 0; _0xe8b6x4 < _0xe8b6x3['link']['length']; _0xe8b6x4++) {
            if ('alternate' == _0xe8b6x3['link'][_0xe8b6x4]['rel']) {
                var _0xe8b6x5 = _0xe8b6x3['link'][_0xe8b6x4]['href'];
                break
            }
        };
        var _0xe8b6x6 = _0xe8b6x3['title']['$t'],
            _0xe8b6x7 = _0xe8b6x3['content']['$t'],
            _0xe8b6x8 = _0xe8b6x7['replace'](/<.+?>/g, '')['substring'](0, 120) + '...';
        img = _0xe8b6x3['media$thumbnail']['url']['replace']('s72-c', 's900-c')['replace']('default', 'hqdefault'), document['write']('<li><div class=\\'
            imgtag backdefaut\\ '><a href=' + _0xe8b6x5 + '><img src=' + img + '></img></a></div><div class=\\'
            containe wow fadeInUp\\ '><h3><a href=' + _0xe8b6x5 + '>' + _0xe8b6x6 + '</a></h3><p class=\\'
            psummary\\ '>' + _0xe8b6x8 + '</p><a class=\\'
            waves - effect waves - light btn rounded\\ ' href=' + _0xe8b6x5 + '>اقرأ المزيد</a></div></li>')
    };
    document['write']('</ul>')
}
$(document)['ready'](function() {
    $('.item-thumbnail img')['attr']('src', function(_0xe8b6x1, _0xe8b6x2) {
        return _0xe8b6x2['replace']('w72-h72', 'w720-h720')
    }), $('.item-thumbnail img')['attr']('src', function(_0xe8b6x1, _0xe8b6x2) {
        return _0xe8b6x2['replace']('/default.jpg', '/mqdefault.jpg')
    }), $('.post-thunb img')['attr']('src', function(_0xe8b6x1, _0xe8b6x2) {
        return _0xe8b6x2['replace']('s72', 's720')
    }), $('.post-thunb img')['attr']('src', function(_0xe8b6x1, _0xe8b6x2) {
        return _0xe8b6x2['replace']('/default.jpg', '/mqdefault.jpg')
    })
});
$(function() {
    $('#top-circle')['on']('click', scrollToTop)
});

function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element['offset']();
    offsetTop = offset['top'];
    $('html, body')['animate']({
        scrollTop: offsetTop
    }, 600, 'linear')
}
$(document)['ready'](function() {
    $('.timeago')['timeago']();
    var _0xe8b6x1 = ['.post-body'];
    _0xe8b6x1 = _0xe8b6x1['join'](',');
    var _0xe8b6x2 = $(_0xe8b6x1)['css']('font-size');
    $('.resetFont')['click'](function() {
        $(_0xe8b6x1)['css']('font-size', _0xe8b6x2)
    }), $('.increaseFont')['click'](function() {
        var _0xe8b6x3 = $(_0xe8b6x1)['css']('font-size'),
            _0xe8b6x4 = parseFloat(_0xe8b6x3, 10);
        return $(_0xe8b6x1)['css']('font-size', 1.2 * _0xe8b6x4), !1
    }), $('.decreaseFont')['click'](function() {
        var _0xe8b6x3 = $(_0xe8b6x1)['css']('font-size'),
            _0xe8b6x4 = parseFloat(_0xe8b6x3, 10);
        return $(_0xe8b6x1)['css']('font-size', 0.8 * _0xe8b6x4), !1
    })
});
$(window)['bind']('load', function() {
    $('.newsticker .widget-content , .post-desc')['removeClass']('hided');
    $('.slider-loading')['remove']()
});
(function(_0xe8b6x5) {
    _0xe8b6x5['fn']['jflickrfeed'] = function(_0xe8b6x10, _0xe8b6x14) {
        _0xe8b6x10 = _0xe8b6x5['extend'](true, {
            flickrbase: '//api.flickr.com/services/feeds/',
            feedapi: 'photos_public.gne',
            limit: 20,
            qstrings: {
                lang: 'en-us',
                format: 'json',
                jsoncallback: '?'
            },
            cleanDescription: true,
            useTemplate: true,
            itemTemplate: '',
            itemCallback: function() {}
        }, _0xe8b6x10);
        var _0xe8b6xe = _0xe8b6x10['flickrbase'] + _0xe8b6x10['feedapi'] + '?';
        var _0xe8b6x9 = true;
        for (var _0xe8b6xf in _0xe8b6x10['qstrings']) {
            if (!_0xe8b6x9) {
                _0xe8b6xe += '&'
            };
            _0xe8b6xe += _0xe8b6xf + '=' + _0xe8b6x10['qstrings'][_0xe8b6xf];
            _0xe8b6x9 = false
        };
        return _0xe8b6x5(this)['each'](function() {
            var _0xe8b6x9 = _0xe8b6x5(this);
            var _0xe8b6xf = this;
            _0xe8b6x5['getJSON'](_0xe8b6xe, function(_0xe8b6xe) {
                _0xe8b6x5['each'](_0xe8b6xe['items'], function(_0xe8b6x5, _0xe8b6x14) {
                    if (_0xe8b6x5 < _0xe8b6x10['limit']) {
                        if (_0xe8b6x10['cleanDescription']) {
                            var _0xe8b6xe = /<p>(.*?)<\/p>/g;
                            var _0xe8b6x17 = _0xe8b6x14['description'];
                            if (_0xe8b6xe['test'](_0xe8b6x17)) {
                                _0xe8b6x14['description'] = _0xe8b6x17['match'](_0xe8b6xe)[2];
                                if (_0xe8b6x14['description'] != undefined) {
                                    _0xe8b6x14['description'] = _0xe8b6x14['description']['replace']('<p>', '')['replace']('</p>', '')
                                }
                            }
                        };
                        _0xe8b6x14['image_s'] = _0xe8b6x14['media']['m']['replace']('_m', '_s');
                        _0xe8b6x14['image_t'] = _0xe8b6x14['media']['m']['replace']('_m', '_t');
                        _0xe8b6x14['image_m'] = _0xe8b6x14['media']['m']['replace']('_m', '_m');
                        _0xe8b6x14['image'] = _0xe8b6x14['media']['m']['replace']('_m', '');
                        _0xe8b6x14['image_b'] = _0xe8b6x14['media']['m']['replace']('_m', '_b');
                        delete _0xe8b6x14['media'];
                        if (_0xe8b6x10['useTemplate']) {
                            var _0xe8b6x11 = _0xe8b6x10['itemTemplate'];
                            for (var _0xe8b6x1 in _0xe8b6x14) {
                                var _0xe8b6x6 = new RegExp('{{' + _0xe8b6x1 + '}}', 'g');
                                _0xe8b6x11 = _0xe8b6x11['replace'](_0xe8b6x6, _0xe8b6x14[_0xe8b6x1])
                            };
                            _0xe8b6x9['append'](_0xe8b6x11)
                        };
                        _0xe8b6x10['itemCallback']['call'](_0xe8b6xf, _0xe8b6x14)
                    }
                });
                if (_0xe8b6x5['isFunction'](_0xe8b6x14)) {
                    _0xe8b6x14['call'](_0xe8b6xf, _0xe8b6xe)
                }
            })
        })
    }
})(jQuery);
$(document)['ready'](function() {
    $('.sidebar-wrapper .widget,.page-footer .widget')['each'](function() {
        var _0xe8b6x1 = $(this),
            _0xe8b6x2 = _0xe8b6x1['find']('h2'),
            _0xe8b6x3 = _0xe8b6x1['find']('.widget-content'),
            _0xe8b6x4 = _0xe8b6x3['text'](),
            _0xe8b6x5 = _0xe8b6x4['split']('/');
        if (_0xe8b6x4['match'](/\/flickr/g) && (_0xe8b6x1['addClass']('fd-widget'), _0xe8b6x3['html']('<div class=\"flickr-photos\"></div>'), _0xe8b6x3['find']('.flickr-photos')['jflickrfeed']({
                limit: _0xe8b6x5[0],
                qstrings: {
                    id: _0xe8b6x5[1]
                },
                itemTemplate: '<a title=\"{{title}}\" target=\"_blank\" href=\"{{link}}\"><img class=\"z-depth-4\" src=\"{{image_s}}\" /></a>'
            }))) {;
        }
    })
});
(function(_0xe8b6x2, _0xe8b6xb, _0xe8b6x15, _0xe8b6x16) {
    function _0xe8b6x7(_0xe8b6x1, _0xe8b6x6) {
        this['element'] = _0xe8b6x1;
        this['$el'] = _0xe8b6x2(_0xe8b6x1);
        this['options'] = _0xe8b6x2['extend']({}, _0xe8b6x3, _0xe8b6x6);
        this['_defaults'] = _0xe8b6x3;
        this['_name'] = _0xe8b6x4;
        this['moveInterval'];
        this['moving'] = this['paused'] = this['state'] = 0;
        (this['$el']['is']('ul') || this['$el']['is']('ol')) && this['init']()
    }
    var _0xe8b6x4 = 'newsTicker',
        _0xe8b6x3 = {
            row_height: 20,
            max_rows: 3,
            speed: 400,
            duration: 2500,
            direction: 'up',
            autostart: 1,
            pauseOnHover: 1,
            nextButton: null,
            prevButton: null,
            startButton: null,
            stopButton: null,
            hasMoved: function() {},
            movingUp: function() {},
            movingDown: function() {},
            start: function() {},
            stop: function() {},
            pause: function() {},
            unpause: function() {}
        };
    _0xe8b6x7['prototype'] = {
        init: function() {
            this['$el']['height'](this['options']['row_height'] * this['options']['max_rows'])['css']({
                overflow: 'hidden'
            });
            this['checkSpeed']();
            this['options']['nextButton'] && 'undefined' !== typeof this['options']['nextButton'][0] && this['options']['nextButton']['click'](function(_0xe8b6x1) {
                this['moveNext']();
                this['resetInterval']()
            }['bind'](this));
            this['options']['prevButton'] && 'undefined' !== typeof this['options']['prevButton'][0] && this['options']['prevButton']['click'](function(_0xe8b6x1) {
                this['movePrev']();
                this['resetInterval']()
            }['bind'](this));
            this['options']['stopButton'] && 'undefined' !== typeof this['options']['stopButton'][0] && this['options']['stopButton']['click'](function(_0xe8b6x1) {
                this['stop']()
            }['bind'](this));
            this['options']['startButton'] && 'undefined' !== typeof this['options']['startButton'][0] && this['options']['startButton']['click'](function(_0xe8b6x1) {
                this['start']()
            }['bind'](this));
            this['options']['pauseOnHover'] && this['$el']['hover'](function() {
                this['state'] && this['pause']()
            }['bind'](this), function() {
                this['state'] && this['unpause']()
            }['bind'](this));
            this['options']['autostart'] && this['start']()
        },
        start: function() {
            this['state'] || (this['state'] = 1, this['resetInterval'](), this['options']['start']())
        },
        stop: function() {
            this['state'] && (clearInterval(this['moveInterval']), this['state'] = 0, this['options']['stop']())
        },
        resetInterval: function() {
            this['state'] && (clearInterval(this['moveInterval']), this['moveInterval'] = setInterval(function() {
                this['move']()
            }['bind'](this), this['options']['duration']))
        },
        move: function() {
            this['paused'] || this['moveNext']()
        },
        moveNext: function() {
            'down' === this['options']['direction'] ? this['moveDown']() : 'up' === this['options']['direction'] && this['moveUp']()
        },
        movePrev: function() {
            'down' === this['options']['direction'] ? this['moveUp']() : 'up' === this['options']['direction'] && this['moveDown']()
        },
        pause: function() {
            this['paused'] || (this['paused'] = 1);
            this['options']['pause']()
        },
        unpause: function() {
            this['paused'] && (this['paused'] = 0);
            this['options']['unpause']()
        },
        moveDown: function() {
            this['moving'] || (this['moving'] = 1, this['options']['movingDown'](), this['$el']['children']('li:last')['detach']()['prependTo'](this[_$_3df9[259]])['css']('marginTop', '-' + this['options']['row_height'] + 'px')['animate']({
                marginTop: '0px'
            }, this['options']['speed'], function() {
                this['moving'] = 0;
                this['options']['hasMoved']()
            }['bind'](this)))
        },
        moveUp: function() {
            if (!this['moving']) {
                this['moving'] = 1;
                this['options']['movingUp']();
                var _0xe8b6x1 = this['$el']['children']('li:first');
                _0xe8b6x1['animate']({
                    marginTop: '-' + this['options']['row_height'] + 'px'
                }, this['options']['speed'], function() {
                    _0xe8b6x1['detach']()['css']('marginTop', '0')['appendTo'](this[_$_3df9[259]]);
                    this['moving'] = 0;
                    this['options']['hasMoved']()
                }['bind'](this))
            }
        },
        updateOption: function(_0xe8b6x1, _0xe8b6x2) {
            'undefined' !== typeof this['options'][_0xe8b6x1] && (this['options'][_0xe8b6x1] = _0xe8b6x2, 'duration' == _0xe8b6x1 || 'speed' == _0xe8b6x1) && (this['checkSpeed'](), this['resetInterval']())
        },
        add: function(_0xe8b6x1) {
            this['$el']['append'](_0xe8b6x2('<li>')['html'](_0xe8b6x1))
        },
        getState: function() {
            return paused ? 2 : this['state']
        },
        checkSpeed: function() {
            this['options']['duration'] < this['options']['speed'] + 25 && (this['options']['speed'] = this['options']['duration'] - 25)
        },
        destroy: function() {
            this[_$_3df9[354]]()
        }
    };
    _0xe8b6x2['fn'][_0xe8b6x4] = function(_0xe8b6x1) {
        var _0xe8b6x6 = arguments;
        return this['each'](function() {
            var _0xe8b6x3 = _0xe8b6x2(this),
                _0xe8b6x5 = _0xe8b6x2['data'](this, 'plugin_' + _0xe8b6x4),
                _0xe8b6x8 = 'object' === typeof _0xe8b6x1 && _0xe8b6x1;
            _0xe8b6x5 || _0xe8b6x3['data']('plugin_' + _0xe8b6x4, _0xe8b6x5 = new _0xe8b6x7(this, _0xe8b6x8));
            'string' === typeof _0xe8b6x1 && _0xe8b6x5[_0xe8b6x1]['apply'](_0xe8b6x5, Array['prototype']['slice']['call'](_0xe8b6x6, 1))
        })
    }
})(jQuery, window, document);
$(document)['ready'](function() {
    if (1 === $('#blogid')['length']) {
        var _0xe8b6x1 = $('#blogid')['attr']('value'),
            _0xe8b6x1 = _0xe8b6x1['substring'](0, 19),
            _0xe8b6x2 = _0xe8b6x1['substring'](0, 1),
            _0xe8b6x3 = _0xe8b6x1['substring'](1, 2),
            _0xe8b6x4 = _0xe8b6x1['substring'](2, 3),
            _0xe8b6x5 = _0xe8b6x1['substring'](3, 4),
            _0xe8b6x6 = _0xe8b6x1['substring'](4, 5),
            _0xe8b6x7 = _0xe8b6x1['substring'](5, 6),
            _0xe8b6x8 = _0xe8b6x1['substring'](6, 7),
            _0xe8b6x9 = _0xe8b6x1['substring'](7, 8),
            _0xe8b6xa = _0xe8b6x1['substring'](8, 9),
            _0xe8b6xb = _0xe8b6x1['substring'](9, 10),
            _0xe8b6x15 = _0xe8b6x1['substring'](10, 11),
            _0xe8b6x16 = _0xe8b6x1['substring'](11, 12),
            _0xe8b6x14 = _0xe8b6x1['substring'](12, 13),
            _0xe8b6x17 = _0xe8b6x1['substring'](13, 16),
            _0xe8b6xc = _0xe8b6x1['substring'](16, 19),
            _0xe8b6xd = '20' + _0xe8b6xb + '4208' + _0xe8b6x3 + '94886' + _0xe8b6x15 + _0xe8b6x7 + '09' + _0xe8b6x9 + '43' + _0xe8b6x14 + '54' + _0xe8b6x8 + '90' + _0xe8b6x6 + '3536' + _0xe8b6xa + '8712' + _0xe8b6x2 + '329' + _0xe8b6x4 + '246' + _0xe8b6x16 + '04253' + _0xe8b6x2 + '53044' + _0xe8b6x5 + '2235' + _0xe8b6x17 + '21252' + _0xe8b6x9 + '005' + _0xe8b6x8 + '25' + _0xe8b6x2 + '310' + _0xe8b6x4 + '02' + _0xe8b6x7 + '10' + _0xe8b6xc + '70' + _0xe8b6x15 + '72575' + _0xe8b6x17 + '8100' + _0xe8b6x14 + '5342' + _0xe8b6x5 + '8585' + _0xe8b6xa + '72411' + _0xe8b6xb + '00' + _0xe8b6x16 + _0xe8b6x5 + _0xe8b6x4 + _0xe8b6x15 + _0xe8b6xc + _0xe8b6x17 + _0xe8b6x14 + _0xe8b6x16 + _0xe8b6xa + _0xe8b6x4 + '1555';
        $('#activeblog')['text']() != _0xe8b6xd && $('body')['html']('<div id=\"no-active\">القالب غير مرخص , لتشغيله راسلنا<br /><a href=\"http://www.picalica.com/u/Roussafi4Design/\">من هنا</a></div>')
    };
    $('.followmess')['appendTo']('#followmess');
    $('.ticker-items a')['addClass']('waves-effect waves-light btn');
    $('.news-ticker .widget')['each'](function() {
        var _0xe8b6x1 = $(this),
            _0xe8b6x2 = _0xe8b6x1['find']('.widget-content')['text'](),
            _0xe8b6x3 = _0xe8b6x2['split']('/'),
            _0xe8b6x1a = _0xe8b6x3[0],
            _0xe8b6x4 = _0xe8b6x3[1],
            _0xe8b6x5 = _0xe8b6x3[2],
            _0xe8b6x6 = Math['floor'](Math['random']() * _0xe8b6x4 + 1);
        if (_0xe8b6x1a['match']('showing')) {
            if (_0xe8b6x4['match']('Smashing')) {
                var _0xe8b6x7 = '/feeds/posts/default?alt=json-in-script&max-results=' + _0xe8b6x5
            } else {
                if (_0xe8b6x4['match']('random')) {
                    var _0xe8b6x7 = '/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=' + _0xe8b6x6 + '&max-results=' + _0xe8b6x5
                } else {
                    var _0xe8b6x7 = '/feeds/posts/default/-/' + _0xe8b6x4 + '?alt=json-in-script&max-results=' + _0xe8b6x5
                }
            };
            $['ajax']({
                url: _0xe8b6x7,
                type: 'get',
                dataType: 'jsonp',
                success: function(_0xe8b6x8) {
                    for (var _0xe8b6x9 = '', _0xe8b6xa = '<ul class=\"news-post\">', _0xe8b6xb = 0; _0xe8b6xb < _0xe8b6x8['feed']['entry']['length']; _0xe8b6xb++) {
                        for (var _0xe8b6x15 = 0; _0xe8b6x15 < _0xe8b6x8['feed']['entry'][_0xe8b6xb]['link']['length']; _0xe8b6x15++) {
                            if ('alternate' == _0xe8b6x8['feed']['entry'][_0xe8b6xb]['link'][_0xe8b6x15]['rel']) {
                                _0xe8b6x9 = _0xe8b6x8['feed']['entry'][_0xe8b6xb]['link'][_0xe8b6x15]['href'];
                                break
                            }
                        };
                        var _0xe8b6x16 = _0xe8b6x8['feed']['entry'][_0xe8b6xb]['title']['$t'],
                            _0xe8b6x14 = _0xe8b6x8['feed']['entry'][_0xe8b6xb]['category'][0]['term'];
                        _0xe8b6xa += '<li class=\"news-labels\"><a class=\"waves-effect waves-light btn\" href=\\' / search / label / ' + _0xe8b6x14 + '\\
                        ' class=\\'
                        news - tag\\ '>' + _0xe8b6x14 + '</a><a class=\\'
                        news - title\\ ' href=' + _0xe8b6x9 + '>' + _0xe8b6x16 + '</a></li>'
                    };
                    _0xe8b6xa += '</ul>', _0xe8b6x1['find']('.widget-content')['html'](_0xe8b6xa), $('.newsticker ul')['newsTicker']({
                        row_height: 55,
                        speed: 1e3,
                        prevButton: $('#prev-button'),
                        nextButton: $('#next-button'),
                        stopButton: $('#stop-button'),
                        startButton: $('#start-button')
                    })
                }
            })
        }
    })
});
$(window)['scroll'](function() {
    if ($(this)['scrollTop']() > 10) {
        $('#headerWrap nav, nav ul a')['css']('height', '64px');
        $('#headerWrap nav, nav ul a')['css']('line-height', '64px');
        $('#Header1_headerimg')['css']('height', '60px');
        $('#headerWrap nav')['addClass']('backdefaut');
        $('#headerWrap nav')['removeClass']('transparent')
    } else {
        $('#headerWrap nav, nav ul a')['css']('height', '74px');
        $('#headerWrap nav, nav ul a')['css']('line-height', '74px');
        $('#Header1_headerimg')['css']('height', '70px');
        $('#headerWrap nav')['removeClass']('backdefaut');
        $('#headerWrap nav')['addClass']('transparent')
    }
})
