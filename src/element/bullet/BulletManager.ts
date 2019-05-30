import Animation = laya.display.Animation;
import SoundManager = laya.media.SoundManager;
import Pool = laya.utils.Pool;
import { BulletFather } from "./BulletFather";
import { DataProxy } from "../../data/DataProxy";
export class BulletManager{
    private static instance:BulletManager
    public static getInstance():BulletManager{
        if(this.instance == null){
            this.instance = new BulletManager;
        }
        return this.instance;
    }

    //爆炸动画名称
    public BULLET_BOOM_1:string = "bullet_boom_1";
    public BULLET_BOOM_2:string = "bullet_boom_2";
    public BULLET_BOOM_3:string = "bullet_boom_3";
    public BULLET_BOOM_4:string = "bullet_boom_4";
    public BULLET_BOOM_5:string = "bullet_boom_5";
    public BULLET_BOOM_6:string = "bullet_boom_6";
    public BULLET_BOOM_7:string = "bullet_boom_7";
    public BULLET_BOOM_8:string = "bullet_boom_8";
    public BULLET_BOOM_9:string = "bullet_boom_9";
    
    //子弹飞行动画
    public BULLET_FLY_1:string = "bullet_fly_1";
    public BULLET_FLY_2:string = "bullet_fly_2";
    public BULLET_FLY_3:string = "bullet_fly_3";
    public BULLET_FLY_4:string = "bullet_fly_4";
    public BULLET_FLY_5:string = "bullet_fly_5";
    public BULLET_FLY_6:string = "bullet_fly_6";
    public BULLET_FLY_7:string = "bullet_fly_7";
    public BULLET_FLY_8:string = "bullet_fly_8";
    public BULLET_FLY_9:string = "bullet_fly_9";
    
    //子弹
    public BULLET_INFO_1:string = "bullet_info_1";
    public BULLET_INFO_2:string = "bullet_info_2";
    public BULLET_INFO_3:string = "bullet_info_3";
    public BULLET_INFO_4:string = "bullet_info_4";
    public BULLET_INFO_5:string = "bullet_info_5";
    public BULLET_INFO_6:string = "bullet_info_6";
    public BULLET_INFO_7:string = "bullet_info_7";
    public BULLET_INFO_8:string = "bullet_info_8";
    public BULLET_INFO_9:string = "bullet_info_9";

    constructor(){};

        /**
     * 缓存子弹爆炸效果
     */
    public cacheAnimation():void {
        //子弹1飞行动画
        Animation.createFrames(["fish/bullet/bullet1/bullet0001.png"],this.BULLET_FLY_1);
        //子弹1爆炸动画
        Animation.createFrames(
        [
            "fish/bullet/bullet1/bullet0001.png", "fish/bullet/bullet1/bullet0002.png", "fish/bullet/bullet1/bullet0003.png",
            "fish/bullet/bullet1/bullet0004.png", "fish/bullet/bullet1/bullet0005.png", "fish/bullet/bullet1/bullet0006.png",
            "fish/bullet/bullet1/bullet0007.png", "fish/bullet/bullet1/bullet0008.png", "fish/bullet/bullet1/bullet0009.png"
        ], this.BULLET_BOOM_1);
        
        
        //子弹2飞行动画
        Animation.createFrames(["fish/bullet/bullet2/bullet20001.png"],this.BULLET_FLY_2);
        Animation.createFrames(
        [
            "fish/bullet/bullet2/bullet20001.png", "fish/bullet/bullet2/bullet20002.png", "fish/bullet/bullet2/bullet20003.png",
            "fish/bullet/bullet2/bullet20004.png", "fish/bullet/bullet2/bullet20005.png", "fish/bullet/bullet2/bullet20006.png",
            "fish/bullet/bullet2/bullet20007.png", "fish/bullet/bullet2/bullet20008.png", "fish/bullet/bullet2/bullet20009.png"
        ], this.BULLET_BOOM_2);
        
        //子弹3飞行动画
        Animation.createFrames(["fish/bullet/bullet3/bullet30001.png"],this.BULLET_FLY_3);
        Animation.createFrames(
        [
            "fish/bullet/bullet3/bullet30001.png", "fish/bullet/bullet3/bullet30002.png", "fish/bullet/bullet3/bullet30003.png",
            "fish/bullet/bullet3/bullet30004.png", "fish/bullet/bullet3/bullet30005.png", "fish/bullet/bullet3/bullet30006.png",
            "fish/bullet/bullet3/bullet30007.png", "fish/bullet/bullet3/bullet30008.png", "fish/bullet/bullet3/bullet30009.png"
        ], this.BULLET_BOOM_3);
        
        //子弹4飞行动画
        Animation.createFrames(["fish/bullet/bullet4/bullet40001.png"],this.BULLET_FLY_4);
        Animation.createFrames(
        [
            "fish/bullet/bullet4/bullet40001.png", "fish/bullet/bullet4/bullet40002.png", "fish/bullet/bullet4/bullet40003.png",
            "fish/bullet/bullet4/bullet40004.png", "fish/bullet/bullet4/bullet40005.png", "fish/bullet/bullet4/bullet40006.png",
            "fish/bullet/bullet4/bullet40007.png", "fish/bullet/bullet4/bullet40008.png", "fish/bullet/bullet4/bullet40009.png"
        ], this.BULLET_BOOM_4);
        
        //子弹5飞行动画
        Animation.createFrames(["fish/bullet/bullet5/bullet50001.png"],this.BULLET_FLY_5);
        Animation.createFrames(
        [
            "fish/bullet/bullet5/bullet50001.png", "fish/bullet/bullet5/bullet50002.png", "fish/bullet/bullet5/bullet50003.png",
            "fish/bullet/bullet5/bullet50004.png", "fish/bullet/bullet5/bullet50005.png", "fish/bullet/bullet5/bullet50006.png",
            "fish/bullet/bullet5/bullet50007.png", "fish/bullet/bullet5/bullet50008.png", "fish/bullet/bullet5/bullet50009.png"
        ], this.BULLET_BOOM_5);
        
        //子弹6飞行动画
        Animation.createFrames(["fish/bullet/bullet6/bullet60001.png"],this.BULLET_FLY_6);
        Animation.createFrames(
        [
            "fish/bullet/bullet6/bullet60001.png", "fish/bullet/bullet6/bullet60002.png", "fish/bullet/bullet6/bullet60003.png",
            "fish/bullet/bullet6/bullet60004.png", "fish/bullet/bullet6/bullet60005.png", "fish/bullet/bullet6/bullet60006.png",
            "fish/bullet/bullet6/bullet60007.png", "fish/bullet/bullet6/bullet60008.png", "fish/bullet/bullet6/bullet60009.png"
        ], this.BULLET_BOOM_6);
        
        //子弹7飞行动画
        Animation.createFrames(["fish/bullet/bullet7/bullet70001.png"],this.BULLET_FLY_7);
        Animation.createFrames(
        [
            "fish/bullet/bullet7/bullet70001.png", "fish/bullet/bullet7/bullet70002.png", "fish/bullet/bullet7/bullet70003.png",
            "fish/bullet/bullet7/bullet70004.png", "fish/bullet/bullet7/bullet70005.png", "fish/bullet/bullet7/bullet70006.png",
            "fish/bullet/bullet7/bullet70007.png", "fish/bullet/bullet7/bullet70008.png", "fish/bullet/bullet7/bullet70009.png"
        ], this.BULLET_BOOM_7);
        
        //子弹8飞行动画
        Animation.createFrames(["fish/bullet/bullet8/bullet80001.png"],this.BULLET_FLY_8);
        Animation.createFrames(
        [
            "fish/bullet/bullet8/bullet80001.png", "fish/bullet/bullet8/bullet80002.png", "fish/bullet/bullet8/bullet80003.png",
            "fish/bullet/bullet8/bullet80004.png", "fish/bullet/bullet8/bullet80005.png", "fish/bullet/bullet8/bullet80006.png",
            "fish/bullet/bullet8/bullet80007.png", "fish/bullet/bullet8/bullet80008.png", "fish/bullet/bullet8/bullet80009.png"
        ], this.BULLET_BOOM_8);
        
        //子弹9飞行动画
        Animation.createFrames(["fish/bullet/bullet9/bullet90001.png"],this.BULLET_FLY_9);
        Animation.createFrames(
        [
            "fish/bullet/bullet9/bullet90001.png", "fish/bullet/bullet9/bullet90002.png", "fish/bullet/bullet9/bullet90003.png",
            "fish/bullet/bullet9/bullet90004.png", "fish/bullet/bullet9/bullet90005.png", "fish/bullet/bullet9/bullet90006.png",
            "fish/bullet/bullet9/bullet90007.png", "fish/bullet/bullet9/bullet90008.png", "fish/bullet/bullet9/bullet90009.png"
        ], this.BULLET_BOOM_9);
    }

    /**
     * 创建一颗子弹
     * @param	type
     * @return
     */
    public createBulletByType(type:number):BulletFather {
        var bullet:BulletFather;
        if (type == 1) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_1, BulletFather);
        }else if (type == 2) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_2, BulletFather);
        }else if (type == 3) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_3, BulletFather);
        }else if (type == 4) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_4, BulletFather);
        }else if (type == 5) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_5, BulletFather);
        }else if (type == 6) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_6, BulletFather);
        }else if (type == 7) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_7, BulletFather);
        }else if (type == 8) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_8, BulletFather);
        }else if (type == 9) {
            bullet = Pool.getItemByClass(this.BULLET_INFO_9, BulletFather);
        }
        
        bullet.sign = "bullet_info_" + type;
        bullet.flyAn = "bullet_fly_" + type;
        bullet.boomAn = "bullet_boom_" + type;
        bullet.dataVo = DataProxy.getInstance().getDataByType(type);
        bullet.type = type;
        SoundManager.playSound("res/sound/bullet_normal1.mp3");
        return bullet;
    }

    /**
     * 回收子弹
     * @param	bullet
     */
    public recoverBullerByType(bullet:BulletFather):void {
        Pool.recover(bullet.sign, bullet);
    }
}