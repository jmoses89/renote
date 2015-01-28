//view
var Bookmark = Bookmark || {}

Bookmark.CollectionView = Backbone.View.extend({
    //container to hold bookmarks
    initialize: function(){
      this.collection = new Bookmark.Collection()
      this.collection.fetch();
      // this.listenTo(this.collection,'reset',this.render);
      // this.listenTo(this.collection,'change',this.render);
      this.listenTo(this.collection, 'add', this.addOne);
    },
    el: '#bookmarks',
    render: function(){
      this.addAll();
    },

    addOne: function(bookmark){
       var bookmarkView =  new Bookmark.View({ model: bookmark });
       this.$el.append(bookmarkView.render().$el);
    },

    addAll: function(){
      var self = this;
      this.collection.fetch().done(function(){
         self.collection.forEach(self.addOne,self);
      }) ;   
    }
  });

