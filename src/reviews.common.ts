
import { View } from "tns-core-modules/ui/core/view";
import { Observable } from 'tns-core-modules/data/observable';
import * as application from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Label } from 'tns-core-modules/ui/label';
import { ScrollView } from 'tns-core-modules/ui/scroll-view';
import { ItemSpec } from "tns-core-modules/ui/layouts/grid-layout";
import { GridUnitType } from "tns-core-modules/ui/layouts/grid-layout";
import { Repeater } from 'tns-core-modules/ui/repeater';
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { Fontawesome } from 'nativescript-fontawesome';
export class Common extends StackLayout {
  private replytoWraper: any;
  public reviews: any = [];
  public scroll: any = true;
  public imagetag: any;
  private initscroll = true;
  public title: string = "Reviews";
  private rep: Repeater;
  private scrollview: any;
  public plugin: any;
  public sendText: string = "review";
  private likeQ = [];
  private headtitle: any;
  public dateHandler: any;

  public static longEvent: string = "long";
  public reviewCount() {
    let count = this.reviews.length;
    return this.title + ' (' + count + ')';
  }

  public LongPress(args) {

    let obj = args.object;
    let self = <Common>args.object.parent.bindingContext;
    let id = obj.get('dataid');
    let items = self.reviews.filter((item) => {
      return item.id == id;
    });
    self.notify({
      eventName: Common.longEvent,
      object: self,
      item: items[0],
    });
  }

  public init() {

    let self = this;

    Fontawesome.init();

    if (this.scroll === "false")
      this.scroll = false;
    else
      this.scroll = true;
    let hrlight = this.parseOptions(new StackLayout(), { className: "hr-light" });
    this.headtitle = this.parseOptions(new Label(), { class: "review-title", text: this.reviewCount() });
    // this.addChild(grid);
    this.addChild(this.headtitle);
    this.addChild(hrlight);
    // <GridLayout rows="*,auto">
    let imageholder = "";
    if (this.imagetag)
      imageholder = this.imagetag;
    else
      imageholder = '<Image verticalAlignment="top" row="0" col="0" src="{{ image }}" class="review-userimage img-circle" height="45" width="45" stretch="fill" />';
    let plugin = "";
    if (this.plugin)
      plugin = this.plugin;
    if (this.scroll === true)
      this.scrollview = <ScrollView>this.parseOptions(new ScrollView(), { row: 0 });
    else
      this.scrollview = <StackLayout>this.parseOptions(new StackLayout(), { row: 0 });

    this.rep = new Repeater();
    if (this.reviews[this.reviews.length - 1])
      this.reviews[this.reviews.length - 1].scrolltome = 'scrolltome';
    this.rep.items = this.reviews;
    this.rep.bindingContext = self;
    this.rep.id = 'mainrep';
    let reviewsDateTo;
    if (this.dateHandler)
      reviewsDateTo = this.dateHandler;
    else
      reviewsDateTo = "reviewsDateTo";

    this.rep.itemTemplate = `
        <GridLayout  dataid="{{ id,id }}"  longPress="{{$parents['Repeater'].LongPress,$parents['Repeater'].LongPress}}" ${ plugin} class="review" rows="auto" columns="auto,*">
        ${imageholder}
        <StackLayout class="review-details" row="0" col="1">
        <StackLayout orientation="horizontal">
          <Label row="0" col="1" text="{{ username }}" class="review-username" textWrap="true" />
          <Repeater items="{{ getratearray(rate) }}">
          <Repeater.itemsLayout>
              <StackLayout class="review-stars-rate" orientation="horizontal" />
          </Repeater.itemsLayout>
          <Repeater.itemTemplate>
          <Label  col="1" class="fa review-star" text="{{ $value ==true ? 'fa-star' :'fa-star-o' | fontawesome}}"></Label> 
          </Repeater.itemTemplate>
            </Repeater>
           
          </StackLayout>
          <Label row="1" col="1" text="{{ review }}" class="review-text" textWrap="true" />
          <Label row="0" col="1" text="{{ ${reviewsDateTo}(datetime) }}" class="review-datetime" textWrap="true" />
          <StackLayout row="3"  id="{{ scrolltome ? scrolltome : ''  }}" />
         </StackLayout>
        </GridLayout>
        `;
    if (this.scroll === true)
      this.scrollview.content = this.rep;
    else
      this.scrollview.addChild(this.rep);

    this.addChild(this.scrollview);

  }

  public refresh() {
    this.headtitle.text = this.reviewCount();
    this.rep.items = this.reviews;
    this.rep.refresh();
  }
  constructor() {
    super();
    let self = this;
    setTimeout(() => {
      this.init();
    }, 100);

    let resources = application.getResources();





    resources['getratearray'] = (rate) => {
      let arrayofitems = [];
      for (let i = 0; i < 5; i++) {
        if (i < rate)
          arrayofitems.push(true);
        else
          arrayofitems.push(false);
      }
      return arrayofitems;
    };
    resources['reviewsDateTo'] = function (time: any) {
      switch (typeof <any>time) {
        case 'number':
          break;
        case 'string':
          time = +new Date(time);
          break;
        case 'object':
          if (time.constructor === Date) time = time.getTime();
          break;
        default:
          time = +new Date();
      }
      let time_formats = [
        [60, 'seconds', 1], // 60
        [120, '1 minute ago', '1 minute from now'], // 60*2
        [3600, 'minutes', 60], // 60*60, 60
        [7200, '1 hour ago', '1 hour from now'], // 60*60*2
        [86400, 'hours', 3600], // 60*60*24, 60*60
        [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
        [604800, 'days', 86400], // 60*60*24*7, 60*60*24
        [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
        [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
        [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
        [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
        [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
        [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
        [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
      ];
      let seconds = (+new Date() - <any>time) / 1000,
        token = 'ago',
        list_choice = 1;

      if (seconds === 0) {
        return 'Just now';
      }
      if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = 'from now';
        list_choice = 2;
      }
      let i = 0,
        format;
      while (format = time_formats[i++])
        if (seconds < format[0]) {
          if (typeof format[2] === 'string')
            return format[list_choice];
          else
            return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
        }
      return time;
    };

    application.setResources(resources);
    // let wraper = this.renderGrid({ rows: { star: title, auto: hr1 } });
    // let hr2 = this.renderStack();
    // this.addChild(hr2);
    // this.addChild(wraper);
    // let wraper = this.renderGrid({ className: "review-foote", row: 1, rows: ["auto", "auto"], columns: ["star", "auto"] });
  }

  private parseOptions(view, options) {

    Object.keys(options).forEach(function (key, index) {
      if (key === "rows")
        options[key].forEach(function (value, index) {
          view.addRow(new ItemSpec(1, (<GridUnitType>value)));
        });
      else if (key === "columns")
        options[key].forEach(function (value, index) {
          view.addColumn(new ItemSpec(1, (<GridUnitType>value)));
        });
      else {
        view[key] = options[key];
      }
    });

    return view;
  }

}