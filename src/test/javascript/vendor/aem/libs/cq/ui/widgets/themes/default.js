/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.Highlight
 * The theme-specific constants for {@link CQ.Highlight}.
 * @static
 * @singleton
 */
CQ.themes.Highlight = function() {

    return {

        /**
         * The width of the highlight frame in pixels (defaults to 10).
         * @static
         * @final
         * @type Number
         */
        FRAME_WIDTH: 10,

        /**
         * The padding between the element and the highlight frame in pixels
         * (defaults to 2).
         * @static
         * @final
         * @type Number
         */
        FRAME_PADDING: 2,

        /**
         * The hexadecimal color value for the flashing effect
         * (defaults to "#ab6fc7").
         * @static
         * @final
         * @type String
         */
        FLASH_COLOR: "#ab6fc7",

        /**
         * The number of times to repeat the flashing effect (defaults to 3).
         * @static
         * @final
         * @type Number
         */
        FLASH_NUM: 3,

        /**
         * The duration of the flashing effect in seconds (defaults to 0.3).
         * @static
         * @final
         * @type Number
         */
        FLASH_DURATION: 0.3

    };

}();


/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.Dialog
 * The theme-specific constants for {@link CQ.Dialog}.
 * @static
 * @singleton
 */
CQ.themes.Dialog = function() {

    return {

        /**
         * The width of dialogs in pixels (defaults to 520).
         * @static
         * @final
         * @type Number
         */
        WIDTH: 520,

        /**
         * The height of dialogs in pixels (defaults to 360).
         * @static
         * @final
         * @type Number
         */
        HEIGHT: 360,

        /**
         * The minimum width of dialogs in pixels (defaults to 360).
         * @static
         * @final
         * @type Number
         */
        MIN_WIDTH: 360,

        /**
         * The minimum height of dialogs in pixels (defaults to 200).
         * @static
         * @final
         * @type Number
         */
        MIN_HEIGHT: 200,

        /**
         * The {@link CQ.Ext.Window#bodyStyle bodyStyle} value for dialogs
         * (defaults to "padding:2px;").
         * @static
         * @final
         * @type String
         */
        BODY_STYLE: "padding:2px;",

        /**
         * The button alignment of dialogs (defaults to "right").
         * @static
         * @final
         * @type String
         */
        BUTTON_ALIGN: "right",

        /**
         * The minimum button width in pixels (defaults to 75).
         * @static
         * @final
         * @type Number
         */
        MIN_BUTTON_WIDTH: 75,

        /**
         * The {@link CQ.Ext.Window#plain plain} value for dialogs
         * (defaults to true).
         * @static
         * @final
         * @type Boolean
         */
        PLAIN: true,

        /**
         * The {@link CQ.Ext.TabPanel#plain plain} value for tab panels
         * inside dialogs (defaults to true).
         * @static
         * @final
         * @type Boolean
         */
        TABPANEL_PLAIN: true,

        /**
         * The {@link CQ.Ext.Panel#border border} value for tab panels
         * inside dialogs.
         * @static
         * @final
         * @type Boolean
         */
        TABPANEL_BORDER: true,

        /**
         * The {@link CQ.Ext.Panel#bodyStyle bodyStyle} value for the tabs
         * (defaults to "padding:15px;padding-right:0"). In order to avoid
         * horizontal scrollbars, right padding is set to 0, and the padding
         * is provided by the width of the input fields (see {@link #ANCHOR}).
         * @static
         * @final
         * @type String
         */
        TAB_BODY_STYLE: "padding:15px;padding-right:0",

        /**
         * The width of the field labels in pixels (defaults to 130).
         * @static
         * @final
         * @type Number
         */
        LABEL_WIDTH: 130,

        /**
         * The {@link CQ.Ext.form.Field#msgTarget msgTarget} value for
         * input fields (defaults to "qtip").
         * @static
         * @final
         * @type String
         */
        MSG_TARGET: "qtip",

        /**
         * The width of the input fields (defaults to "94%").
         * See {@link #TAB_BODY_STYLE}.
         * @static
         * @final
         * @type String
         */
        ANCHOR: "94%",

        /**
         * The width of checkbox fields (defaults to "90%").
         * Since overflow of checkbox selections is set to "hidden", the 
         * {@link CQ.Ext.form.Checkbox#boxLabel boxLabel}s can get truncated.
         * @static
         * @final
         * @type String
         */
        SELECT_CHECKBOX_ANCHOR: "90%",

        /**
         * The horizontal offset in pixels to use when positioning the dialog
         * in a corner (defaults to 50).
         * @static
         * @final
         * @type Number
         */
        CORNER_X: 50,

        /**
         * The vertical offset in pixels to use when positioning the dialog
         * in a corner (defaults to 30).
         * @static
         * @final
         * @type Number
         */
        CORNER_Y: 40,

        /**
         * The maximum number of characters for the header title
         * (defaults to 50). Applies to Internet Explorer 6.x only.
         * @static
         * @final
         * @type Number
         */
        IE6_TITLE_MAX_CHAR: 80,

        /**
         * The width of the edit lock button (defaults to 16).
         * @static
         * @final
         * @type Number
         */
        LOCK_WIDTH: 16

    };

}();


/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.MediaBrowseDialog
 * The theme-specific constants for {@link CQ.MediaBrowseDialog}.
 * @static
 * @singleton
 * @deprecated
 */
CQ.themes.MediaBrowseDialog = function() {

    return {

        /**
         * The default format of the asset's creation and modification dates
         * (defaults to "m/d/Y g:i a").
         * @static
         * @final
         * @type String
         */
    	MEDIA_DATE: 'm/d/Y g:i a',

        /**
         * The default {@link CQ.MediaBrowseDialog#height height} (defaults to 500).
         * @static
         * @final
         * @type Number
         */
        HEIGHT: 500,

        /**
         * The default {@link CQ.MediaBrowseDialog#minHeight minHeight} (defaults to 500).
         * @static
         * @final
         * @type Number
         */
        MIN_HEIGHT: 500,

        /**
         * The default {@link CQ.MediaBrowseDialog#width width} (defaults to 540).
         * @static
         * @final
         * @type Number
         */
        WIDTH: 540,

        /**
         * The default {@link CQ.MediaBrowseDialog#minWidth minWidth} (defaults to 500).
         * @static
         * @final
         * @type Number
         */
        MIN_WIDTH: 500,

        /**
         * The default {@link CQ.MediaBrowseDialog#resiable resizable} (defaults to true).
         * @static
         * @final
         * @type Boolean
         */
        RESIZABLE: true,

        /**
         * The default {@link CQ.MediaBrowseDialog#resizeHandles resizeHandles} (defaults to "n,s,e,w,se,ne,sw,nw").
         * @static
         * @final
         * @type String
         */
        RESIZE_HANDLES: "n,s,e,w,se,ne,sw,nw"

    };

}();


/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.wcm.Sidekick
 * The theme-specific constants for {@link CQ.wcm.Sidekick}.
 * @static
 * @singleton
 */
CQ.themes.wcm.Sidekick = function() {

    return {

        /**
         * The width of the Sidekick in pixels (defaults to 214).
         * @static
         * @final
         * @type Number
         */
        WIDTH: 214,

        /**
         * The height of the Sidekick in pixels (defaults to 401).
         * @static
         * @final
         * @type Number
         */
        HEIGHT: 401,

        /**
         * The minimum width of the Sidekick in pixels (defaults to 214).
         * @static
         * @final
         * @type Number
         */
        MIN_WIDTH: 214,

        /**
         * The minimum height of the Sidekick in pixels (defaults to 401).
         * @static
         * @final
         * @type Number
         */
        MIN_HEIGHT: 401,

        /**
         * The value for {@link CQ.wcm.Sidekick#bodyStyle bodyStyle}
         * (defaults to "padding:0;border:solid 1px #d0d0d0").
         * @static
         * @final
         * @type String
         */
        BODY_STYLE: "padding:0;border:solid 1px #d0d0d0",

        /**
         * The value for {@link CQ.wcm.Sidekick#resizable resizable}
         * (defaults to true).
         * @static
         * @final
         * @type Boolean
         */
        RESIZABLE: true,

        /**
         * The value for {@link CQ.wcm.Sidekick#resizeHandles resizeHandles}
         * (defaults to "all"). Only applies if {@link #RESIZABLE} is true.
         * @static
         * @final
         * @type String
         */
        RESIZE_HANDLES: "all",

        /**
         * The default icon for components in the Sidekick (defaults to
         * "/libs/cq/ui/widgets/themes/default/icons/16x16/components.png").
         * @static
         * @final
         * @type String
         */
        ICON_COMPONENT: "/libs/cq/ui/widgets/themes/default/icons/16x16/components.png"

    };

}();


/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.wcm.SiteAdmin
 * The theme-specific constants for {@link CQ.wcm.SiteAdmin}.
 * @static
 * @singleton
 */
CQ.themes.wcm.SiteAdmin = function() {

    return {

        /**
         * The width of the tree panel in pixels (defaults to 240).
         * @static
         * @final
         * @type Number 
         */
    	TREE_WIDTH: 240,

        /**
         * The default page size in the grid (defaults to 30).
         * @static
         * @final
         * @type Number 
         */
        GRID_PAGE_SIZE: 30,

        /**
         * The default page text in the grid (defaults to "Items {0} - {1} of {2}").
         * @static
         * @final
         * @type String
         */
        GRID_PAGE_TEXT: CQ.I18n.getMessage("Items {0} - {1} of {2}", null, "paging display, e.g. Items 1 - 10 of 100")

    };
}();


/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.wcm.SiteAdmin
 * The theme-specific constants for {@link CQ.wcm.SiteAdmin}.
 * @static
 * @singleton
 */
CQ.themes.wcm.SiteAdminSearchPanel = function() {

    return {

        /**
         * The width of the query builder panel in pixels (defaults to 240).
         * @static
         * @final
         * @type Number
         */
    	QUERYBUILDER_WIDTH: 320,

        /**
         * The default page size in the grid (defaults to 15).
         * @static
         * @final
         * @type Number
         */
        GRID_PAGE_SIZE: 15,

        /**
         * The default page text in the grid (defaults to "Items {0} - {1} of {2}").
         * @static
         * @final
         * @type String
         */
        GRID_PAGE_TEXT: CQ.I18n.getMessage("Items {0} - {1} of {2}", null, "paging display, e.g. Items 1 - 10 of 100")

    };
    
}();


/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.wcm.EditBase
 * The theme-specific constants for {@link CQ.wcm.EditBase}.
 * @static
 * @singleton
 */
CQ.themes.wcm.EditBase = function() {

    return {
        /**
         * The number of pixels between an edit component and the appearing target line
         * during drag&drop (defaults to 5).
         * @static
         * @final
         * @type int
         */
        TARGETLINE_DISTANCE: 5,

        /**
         * The number of pixels for the height of the appearing ghost
         * during drag&drop (defaults to 100).
         * @static
         * @final
         * @type int
         */
        TARGETGHOST_HEIGHT: 100,

        /**
         * The min number of pixels for the height of the appearing ghost
         * during drag&drop (defaults to 50).
         * @static
         * @final
         * @type int
         */
        TARGETGHOST_MINHEIGHT: 50,

        /**
         * The max number of pixels for the height of the appearing ghost
         * during drag&drop (defaults to 300).
         * @static
         * @final
         * @type int
         */
        TARGETGHOST_MAXHEIGHT: 300,

        /**
         * The number of pixels added before and after the appearing ghost
         * during drag&drop (defaults to 5).
         * @static
         * @final
         * @type int
         */
        TARGETGHOST_PADDING: 5,

        /**
         * The min height of the DD proxy (defaults to 50).
         * @static
         * @final
         * @type int
         */
        DDPROXY_MINHEIGHT: 50,

        /**
         * The max height of the DD proxy (defaults to 300).
         * @static
         * @final
         * @type int
         */
        DDPROXY_MAXHEIGHT: 300,

        /**
         * The min width of the DD proxy (defaults to 50).
         * @static
         * @final
         * @type int
         */
        DDPROXY_MINWIDTH: 50,

        /**
         * The max the width of the DD proxy (defaults to 300).
         * @static
         * @final
         * @type int
         */
        DDPROXY_MAXWIDTH: 600,

        /**
         * The number of pixels placed after the inline edit window (defaults to 10).
         *
         * @static
         * @final
         * @type int
         */
        INLINE_BOTTOM_PADDING: 10,

        /**
         * The default width of an edit dialog before it is opened in
         * inline mode instead of as a popup (defaults to 400).
         * It can be overridden through component config.
         * @static
         * @final
         * @type int
         */
        INLINE_MINIMUM_WIDTH: 400,

        /**
         * The background color of the highlighting effect used in drag & drop (defaults to "#FFCC00").
         * @static
         * @final
         * @type String
         */
        HIGHLIGHT_COLOR: "#FFCC00",

        /**
         * The options for the highlighting effect used in drag & drop. Defaults to: <pre><code>
{
    duration: 1.5
}
</code></pre>
         * @static
         * @final
         * @type Object
         */
        HIGHLIGHT_OPTIONS: {
            duration: 1.5
        },

        /**
         * The width of the insert dialog (defaults to 280).
         * @static
         * @final
         * @type int
         */
        INSERT_DIALOG_WIDTH: 280

    };

}();
/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.wcm.EditRollover
 * The theme-specific constants for {@link CQ.wcm.EditRollover}.
 * @static
 * @singleton
 */
CQ.themes.wcm.EditRollover = function() {

    return {

        /**
         * The number of pixels of an element's minimum height (defaults to 80).
         * If element's height is less than this number, an empty box is created to complete the difference.
         * @static
         * @final
         * @type int
         */
        ELEMENT_MIN_HEIGHT: 80,

        /**
         * The number of pixels of an element's minimum height when insert-only text is
         * not displayed (defaults to 20).
         * @static
         * @final
         * @type int
         */
        ELEMENT_NO_TEXT_MIN_HEIGHT: 20,

        /**
         * The number of pixels for the width of the highlight box (defaults to 10).
         * @static
         * @final
         * @type int
         */
        HIGHLIGHT_WIDTH: 10,

        /**
         * The number of pixels between the edit rollover component and the highlight box (defaults to 2).
         * @static
         * @final
         * @type int
         */
        HIGHLIGHT_PADDING: 2

    }
}();
/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.wcm.ContentFinder
 * The theme-specific constants for {@link CQ.wcm.ContentFinder}.
 * @static
 * @singleton
 */
CQ.themes.wcm.ContentFinder = function() {

    return {

        /**
         * The width of the left panel.
         * @static
         * @final
         * @type Number
         */
        FINDER_WIDTH: 195,

        /**
         * The height of the clipboard panel.
         * @static
         * @final
         * @type Number
         */
        CLIPBOARD_HEIGHT: 122

    };

}();


/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.wcm.ContentFinderTab
 * The theme-specific constants for {@link CQ.wcm.ContentFinderTab}.
 * @static
 * @singleton
 */
CQ.themes.wcm.ContentFinderTab = function() {

    return {

        /**
         * The default height of Query Boxes (defaults to 75).
         * @static
         * @final
         * @type Number
         */
        QUERYBOX_HEIGHT: 75,

        /**
         * The default {@link CQ.Ext.Panel#bodyStyle bodyStyle} value of Query Boxes
         * (defaults to "padding:11px 17px 6px 8px;").
         * @static
         * @final
         * @type String
         */
        QUERYBOX_BODYSTYLE: "padding:11px 17px 6px 8px;",

        /**
         * The default anchor width for form fields of Query Boxes (defaults to "100%").
         * @static
         * @final
         * @type String
         */
        QUERYBOX_ANCHOR: "100%",

        /**
         * The default {@link CQ.Ext.Component#style style} value for form fields
         * of Query Boxes (defaults to "margin-top:5px;").
         * @static
         * @final
         * @type String
         */
        QUERYBOX_FIELDS_STYLE: "margin-top:5px;",

        /**
         * The offset of thumbnails in the {@link CQ.Ext.dd.DDProxy Drag and Drop Proxy}
         * when multiple items are dragged (defaults to 6).
         * @static
         * @final
         * @type Number
         */
        DDPROXY_MULTI_OFFSET: 6,

        /**
         * The top padding of the {@link CQ.Ext.dd.DDProxy Drag and Drop Proxy}
         * (defaults to 3).
         * @static
         * @final
         * @type Number
         */
        DDPROXY_PADDING_TOP: 3,

        /**
         * The left padding of the {@link CQ.Ext.dd.DDProxy Drag and Drop Proxy} (defaults to 20).
         * @static
         * @final
         * @type Number
         */
        DDPROXY_PADDING_LEFT: 20,

        /**
         * The width of thumbnails inside the {@link CQ.Ext.dd.DDProxy Drag and Drop Proxy}
         * (defaults to 140).
         * @static
         * @final
         * @type Number
         */
        DDPROXY_WIDTH: 140,

        /**
         * The height of thumbnails inside the {@link CQ.Ext.dd.DDProxy Drag and Drop Proxy}
         * (defaults to 100).
         * @static
         * @final
         * @type Number
         */
        DDPROXY_HEIGHT: 100
    };

}();
/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.wcm.Annotation
 * The theme-specific constants for {@link CQ.wcm.Annotation}.
 * @static
 * @singleton
 */
CQ.themes.wcm.Annotation = function() {

    return {

        /**
         * The width of the annotation.
         * @static
         * @final
         * @type Number
         */
        WIDTH: 160,

        /**
         * The height of the annotation.
         * @static
         * @final
         * @type Number
         */
        HEIGHT: 160,

        /**
         * The min width of the annotation.
         * @static
         * @final
         * @type Number
         */
        MINWIDTH: 1,

        /**
         * The min height of the annotation.
         * @static
         * @final
         * @type Number
         */
        MINHEIGHT: 1,

        /**
         * The available color schemes
         * @static
         * @final
         * @type String[]
         */
        COLORS: ["yellow", "orange", "pink", "orchid", "blue", "lime"],

        /**
         * The default color.
         * @static
         * @final
         * @type String
         */
        COLOR: "yellow",

        /**
         * The stroke colors of the available color schemes.
         * @static
         * @final
         * @type Object
         */
        STROKE_STYLES: {
            "yellow": "#eacc02",
            "orange": "#ee7000",
            "pink": "#c80265",
            "orchid": "#9013a3",
            "blue": "#14a9da",
            "lime": "#0eb901"
        },

        /**
         * The line width in sketches.
         * @static
         * @final
         * @type Number
         */
        LINE_WIDTH: 2.5,

        /**
         * The delay in milliseconds for save calls after resize, changing the color, 
         * minimize/maximize and drag and drop.
         * @static
         * @final
         * @type Number
         */
        SAVE_DELAY: 1000,

        /**
         * The delay in milliseconds to exit the sketch tool after a sketch has
         * been finished.
         * @static
         * @final
         * @type Number
         */
        EXIT_SKETCH_DELAY: 1200,

        /**
         * True to enable the sketch tool.
         * @static
         * @final
         * @type Boolean
         */
        SKETCHABLE: true

    };
}();

/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.BrowseDialog
 * The theme-specific constants for {@link CQ.BrowseDialog}.
 * @static
 * @singleton
 */
CQ.themes.BrowseDialog = function() {

    return {

        /**
         * The width of browse dialogs in pixels (defaults to 400).
         * @static
         * @final
         * @type Number
         */
        WIDTH: 400,

        /**
         * The height of browse dialogs in pixels (defaults to 400).
         * @static
         * @final
         * @type Number
         */
        HEIGHT: 400,

        /**
         * The minimum width of browse dialogs in pixels (defaults to 200).
         * @static
         * @final
         * @type Number
         */
        MIN_WIDTH: 200,

        /**
         * The minimum height of browse dialogs in pixels (defaults to 240).
         * @static
         * @final
         * @type Number
         */
        MIN_HEIGHT: 240,

        /**
         * The {@link CQ.Ext.Window#resizable resizable} value for
         * browse dialogs (defaults to true).
         * @static
         * @final
         * @type Boolean
         */
        RESIZABLE: true,

        /**
         * The {@link CQ.Ext.Window#resizeHandles resizeHandles} value for
         * browse dialogs (defaults to "all"). Only applies if
         * {@link #RESIZABLE} is true.
         * @static
         * @final
         * @type String
         */
        RESIZE_HANDLES: "all",

        /**
         * The CSS style for the tree panel of the browse dialog
         * (defaults to "padding:5px 0 5px 5px").
         * @static
         * @final
         * @type String
         */
        TREE_STYLE: "padding:5px 0 5px 5px",

        /**
         * The {@link CQ.Ext.tree.TreePanel#lines lines} value for
         * the tree panel of the browse dialog (defaults to false).
         * @static
         * @final
         * @type Boolean
         */
        TREE_LINES: false,

        /**
         * The {@link CQ.Ext.Panel#border border} value for the tree panel
         * of the browse dialog (defaults to false). 
         * @static
         * @final
         * @type Boolean
         */
        TREE_BORDER: false
        
    };
}();


/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.DialogFieldSet
 * The theme-specific constants for {@link CQ.form.DialogFieldSet}.
 * @private
 * @static
 * @singleton
 */
CQ.themes.DialogFieldSet = function() {

    return {

        /**
         * The width of the field labels in pixels (defaults to 118).
         * @static
         * @final
         * @type Number
         */
        LABEL_WIDTH: 118,

        /**
         * The width of the input fields (defaults to "99%").
         * See {@link #TAB_BODY_STYLE}.
         * @static
         * @final
         * @type String
         */
        ANCHOR: "99%"

    };

}();


/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.SmartFile
 * The theme-specific constants for {@link CQ.form.SmartFile}.
 * @static
 * @singleton
 */
CQ.themes.SmartFile = function() {

    return {

        /**
         * Path to icon resources (defaults to
         * "/etc/designs/default/images/icons")
         * @static
         * @final
         * @type String
         */
        ICON_RESOURCES: "/etc/designs/default/images/icons",

        /**
         * Map that defines icons for file extensions. The property name defines the file
         * extension; use the name of the corresponding icon file as property value.
         * Defaults to:
<pre>
 {
    "doc": "doc.gif",
    "eps": "eps.gif",
    "gif": "gif.gif",
    "jpg": "jpg.gif",
    "pdf": "pdf.gif",
    "ppt": "ppt.gif",
    "tif": "tif.gif",
    "txt": "txt.gif",
    "xls": "xls.gif",
    "zip": "zip.gif"
}
</pre>
         * @static
         * @final
         * @type Object
         */
        EXTENSION_TO_ICON: {
            "doc": "doc.gif",
            "eps": "eps.gif",
            "gif": "gif.gif",
            "jpg": "jpg.gif",
            "pdf": "pdf.gif",
            "ppt": "ppt.gif",
            "tif": "tif.gif",
            "txt": "txt.gif",
            "xls": "xls.gif",
            "zip": "zip.gif"
        },

        /**
         * Default icon, if no entry for a download's extension is found in
         * {@link #EXTENSION_TO_ICON} (defaults to "default.gif")
         * @static
         * @final
         * @type String
         */
        DEFAULT_ICON: "default.gif",

        /**
         * Processing panel: Width of icon column (defaults to 32)
         * @static
         * @final
         * @type Number
         */
        ICON_COLUMN_WIDTH: 32,

        /**
         * Processing panel: Width of buttons column (defaults to 60)
         * @static
         * @final
         * @type Number
         */
        BUTTONS_COLUMN_WIDTH: 60

    };

}();

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.SmartImage
 * The theme-specific constants for {@link CQ.form.SmartImage}.
 * @static
 * @singleton
 */
CQ.themes.SmartImage = function() {

    return {

        /**
         * Background color of the canvas. Note that you'll have to use the #rrggbb
         * notation here. It is strongly recommended to use an appropriate a properly
         * setup canvas css instead of changing this value. Defaults to null.
         * @static
         * @final
         * @type String
         */
        BACKGROUND_COLOR: null,

        /**
         * CSS style used for styling the canvas (defaults to "cq-image-canvas")
         * @static
         * @final
         * @type String
         */
        CANVAS_CLASS: "cq-image-canvas",

        /**
         * Default drawing mode (defaults to null). For valid values see
         * <a href="http://developer.mozilla.org/en/Canvas_tutorial/Compositing" target="_blank">http://developer.mozilla.org/en/Canvas_tutorial/Compositing</a>.
         * Note that this setting is ignored completely on Internet Explorer.
         * @static
         * @final
         * @type String
         */
        DEFAULT_DRAWING_MODE: null // "xor"

    };

}();

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.SmartImage.Tool
 * The theme-specific constants for {@link CQ.form.SmartImage.Tool}.
 * @private
 * @static
 * @singleton
 */
CQ.themes.SmartImage.Tool = function() {

    return {

        /**
         * The default width of the image map toolbar (defaults to 500)
         * @static
         * @final
         * @type int
         */
        MAP_TOOLS_WIDTH: 500,

        /**
         * The default width of field labels in the area editor (defaults to 55)
         * @static
         * @final
         * @type int
         */
        MAP_AREAEDITOR_LABEL_WIDTH: 55,

        /**
         * The default width of fields in the area editor (defaults to 180)
         * @static
         * @final
         * @type int
         */
        MAP_AREAEDITOR_FIELD_WIDTH: 180,

        /**
         * The default width of the crop toolbar (defaults to 300)
         * @static
         * @final
         * @type int
         */
        CROP_TOOLS_WIDTH: 300

    };

}();

/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.ImageMap
 * The theme-specific constants for {@link CQ.form.ImageMap}.
 * @private
 * @static
 * @singleton
 */
CQ.themes.ImageMap = function() {

    return {

        // constants used when tools are internalized --------------------------------------

        /**
         * The width of the tool selector (defaults to 150)
         * @static
         * @final
         * @type Number
         */
        TOOL_SELECTOR_WIDTH: 150,

        /**
         * The height of the area edior (defaults to 110
         * @static
         * @final
         * @type Number
         */
        AREA_EDITOR_HEIGHT: 110,

        /**
         * "Fill" color (canvas color format; defaults to "rgba(255, 255, 255, 0.2)")
         * @static
         * @final
         * @type String
         */
        FILL_COLOR: "rgba(255, 255, 255, 0.2)",

        /**
         * "Shadow" color (canvas color format; defaults to "rgba(255, 255, 255, 0.5)")
         * @static
         * @final
         * @type String
         */
        SHADOW_COLOR: "rgba(255, 255, 255, 0.5)",

        /**
         * Basic color (canvas color format; defaults to "rgba(0, 0, 0, 1.0)")
         * @static
         * @final
         * @type String
         */
        BASIC_SHAPE_COLOR: "rgba(0, 0, 0, 1.0)",

        /**
         * Rollover color (canvas color format; defaults to "rgba(128, 128, 192, 1.0)")
         * @static
         * @final
         * @type String
         */
        ROLLOVER_COLOR: "rgba(128, 128, 192, 1.0)",

        /**
         * Selection color (canvas color format; defaults to "rgba(192, 0, 0, 1.0)")
         * @static
         * @final
         * @type String
         */
        SELECTED_COLOR: "rgba(192, 0, 0, 1.0)",

        /**
         * "Handle" color (canvas color format; defaults to "rgba(128, 64, 128, 1.0)")
         * @static
         * @final
         * @type String
         */
        HANDLE_COLOR: "rgba(128, 64, 128, 1.0)",

        /**
         * "Handle" color when rolled over (canvas color format; defaults to
         * "rgba(0, 0, 255, 1.0)")
         * @static
         * @final
         * @type String
         */
        HANDLE_ROLLOVER_COLOR: "rgba(0, 0, 255, 1.0)",

        /**
         * "Handle" color when selected (canvas color format; defaults to
         * "rgba(192, 0, 0, 1.0)")
         * @static
         * @final
         * @type String
         */
        HANDLE_SELECTED_COLOR: "rgba(192, 0, 0, 1.0)",

        /**
         * Size of a "Handle" (defaults to 5)
         * @static
         * @final
         * @type Number
         */
        HANDLE_SIZE: 5

    };

}();


/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.ImageCrop
 * The theme-specific constants for {@link CQ.form.ImageCrop}.
 * @private
 * @static
 * @singleton
 */
CQ.themes.ImageCrop = function() {

    return {

        /**
         * The width of the aspect ratio selector (defaults to 150)
         * @static
         * @final
         * @type Number
         */
        ASPECT_RATIO_WIDTH: 150,

        /**
         * The color of the cropping rectangle (canvas color format; defaults to
         * "rgba(0, 0, 0, 1.0)")
         * @static
         * @final
         * @type String
         */
        CROP_RECT_COLOR: "rgba(0, 0, 0, 1.0)",

        /**
         * Background color (canvas color format) for invalid image parts; may be null
         * (defaults to "rgba(255, 255, 255, 0.8)")
         * @static
         * @final
         * @type String
         */
        BACKGROUND_INVALIDPARTS: "rgba(255, 255, 255, 0.8)",

        /**
         * Distance of the handle to the cropping rectangle (defaults to 3)
         * @static
         * @final
         * @type Number
         */
        HANDLE_DISTANCE: 3,

        /**
         * Length of the handle in pixels (defaults to 15)
         * @static
         * @final
         * @type Number
         */
        HANDLE_LENGTH: 15,

        /**
         * "Thickness" of the handle (defaults to 2)
         * @static
         * @final
         * @type Number
         */
        HANDLE_THICKNESS: 2,

        /**
         * Rollover color for handles (canvas color format; defaults to
         * "rgba(0, 0, 255, 1.0)")
         * @static
         * @final
         * @type String
         */
        HANDLE_ROLLOVER: "rgba(0, 0, 255, 1.0)"

    };

}();


/*
 * Copyright 1997-2009 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.Slideshow
 * @private
 * The theme-specific constants for {@link CQ.form.Slideshow}.
 * @static
 * @singleton
 */
CQ.themes.Slideshow = function() {

    return {

        /**
         * Width of label column for the image display subcomponent (defaults to 80)
         * @static
         * @final
         * @type Number
         * @private
         * @deprecated Not used at all
         */
        LABEL_WIDTH: 80,

        /**
         * Fixed height of the {@link CQ.form.SmartImage} component used for displaying the
         * slides (defaults to 200)
         * @static
         * @final
         * @type Number
         * @private
         * @deprecated Not used at all
         */
        SMARTIMAGE_HEIGHT: 200,

        /**
         * CSS class to use for each image editor of the slideshow (defaults to
         * "cq-slideshow-imgpnl")
         * @static
         * @final
         * @type String
         * @private
         * @deprecated Not used at all
         */
        IMAGEPANEL_CLASS: "cq-slideshow-imgpnl"

    };

}();
/*
 * Copyright 1997-2008 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */

/**
 * @class CQ.themes.SuggestField
 * The theme-specific constants for {@link CQ.form.SuggestField}.
 * @static
 * @singleton
 */
CQ.themes.SuggestField = function() {

    return {
        /**
         * The default {@link CQ.form.SuggestField#listWidth listWidth} (defaults to 325).
         * @static
         * @final
         * @type Number
         */
        LIST_WIDTH: 325,

        /**
         * The default {@link CQ.form.SuggestField#maxHeight maxHeight} (defaults to 303).
         * @static
         * @final
         * @type Number
         */
        MAX_HEIGHT: 303

    };

}();
/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2012 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

/**
 * @class CUI.rte.Theme
 * The theme-specific constants for {@link CQ.form.RichText}.
 * @static
 * @singleton
 */
CUI.rte.Theme = function() {

    return {

        /**
         * The default height of a rich text editor component, including the toolbar(s)
         * (defaults to 210)
         * @static
         * @final
         * @type Number
         */
        DEFAULT_HEIGHT: 210,

        /**
         * The default path where the required stylesheets are located (defaults to
         * "/libs/cq/widgets/themes/default/widgets/form/RichText" [5.2] resp.
         * "/libs/cq/ui/widgets/themes/default/widgets/form/RichText" [as of 5.3])
         * @static
         * @final
         * @type String
         */
        DEFAULT_REQCSS_PATH: "/libs/cq/ui/widgets/themes/default/widgets/form/RichText",

        /**
         * CSS class to be used for styling an anchor (defauls to "cq-rte-anchor")
         * @static
         * @final
         * @type String
         */
        ANCHOR_CLASS: "cq-rte-anchor",

        /**
         * CSS class to be used for styling a table with no actual border (defaults to
         * "cq-rte-forcedborder")
         * @static
         * @final
         * @type String
         */
        TABLE_NOBORDER_CLASS: "cq-rte-forcedborder",

        /**
         * CSS class to be used for custom selections within a table (defaults to
         * "cq-rte-tableselection")
         * @static
         * @final
         * @type String
         * @since 5.3
         */
        TABLESELECTION_CLASS: "cq-rte-tableselection"

    };

}();

// map to CQ.themes.RichText for compatibility issues
CQ.themes.RichText = CUI.rte.Theme;
/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2012 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

/**
 * @class CQ.themes.TextEditor
 * The theme-specific constants for {@link CQ.ipe.TextEditor}.
 * @static
 * @singleton
 */
CQ.themes.TextEditor = function() {

    return {

        /**
         * The CSS class that is used to mark an empty component (defaults to
         * "cq-text-placeholder-ipe")
         * @static
         * @final
         * @type String
         */
        EMPTY_COMPONENT_CLASS: "cq-text-placeholder-ipe"
    };

}();
