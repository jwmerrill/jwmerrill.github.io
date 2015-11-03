module Jekyll
  class RenderMarginNoteTag < Liquid::Tag

    require "shellwords"

    def initialize(tag_name, text, tokens)
      super
      @text = text.shellsplit
    end

    def render(context)
      "<label for='#{@text[0]}' class='margin-toggle'><sup>&#8853;</sup></label><input type='checkbox' id='#{@text[0]}' class='margin-toggle'/><span class='marginnote'>#{@text[1]}</span>"
    end
  end
end

Liquid::Template.register_tag('marginnote', Jekyll::RenderMarginNoteTag)
