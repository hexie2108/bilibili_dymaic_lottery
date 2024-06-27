<?php

namespace bilibili_dynamic_lottery;

class Detail_Model
{
    //视频的评论类型
    const COMMENT_TYPE_VIDEO = 1;
    const SOURCE_TYPE_VIDEO = 'video';
    const SOURCE_TYPE_DYNAMIC = 'dynamic';


    /**
     * 动态作者ID
     *
     * @var int
     */
    public $author_id;

    /**
     * 动态作者
     *
     * @var string
     */
    public $author_name;

    /**
     * 动态头像地址
     *
     * @var string
     */
    public $author_avatar;

    /**
     * 动态描述
     *
     * @var string
     */
    public $description;

    /**
     * 评论总数
     * @var int
     */
    public $comment_count = 0;

    /**
     * 转发总数
     * @var int
     */
    public $forward_count = 0;

    /**
     * 点赞总数
     * @var int
     */
    public $like_count = 0;


    /**
     * 评论区ID
     *
     * @var int|null
     */
    public $comment_area_id = 0;

    /**
     * 评论类型ID
     *
     * @var int|null
     */
    public $comment_type;

    /**
     * 说明数据来源类型
     *
     * @var string
     */
    public $source_type;


    //避免被直接创建实例
    private function __construct()
    {
    }

    /**
     * 通过视频数据创建详情对象
     *
     * @param array<string, mixed> $video_data
     * @return Detail_Model
     */
    public static function create_by_video_data($video_data)
    {
        $model = new self();

        $model->author_id = $video_data['owner']['mid'] ?? 0;
        $model->author_name = $video_data['owner']['name'] ?? '';
        $model->author_avatar = $video_data['owner']['face'] ?? '';

        $model->description =  $video_data['title'] ?? '';

        $model->comment_count =  $video_data['stat']['reply'] ?? 0;
        $model->forward_count =  $video_data['stat']['share'] ?? 0;
        $model->like_count =  $video_data['stat']['like'] ?? 0;

        // $model->comment_area_id = bv_to_av($id);
        $model->comment_area_id = $video_data['aid'] ?? null;
        $model->comment_type = static::COMMENT_TYPE_VIDEO;

        $model->source_type = static::SOURCE_TYPE_VIDEO;

        //如果无法提取到数据
        throw_exception_if_is_null($model->comment_area_id, '评论区ID 获取失败');


        return $model;
    }

    /**
     * 通过动态数据创建详情对象
     *
     * @param array<string, mixed> $dynamic_data
     * @return Detail_Model
     */
    public static function create_by_dynamic_data($dynamic_data)
    {

        $model = new self();

        $modules = $dynamic_data['item']['modules'] ?? null;
        throw_exception_if_is_null($modules, '无法从动态详情中获取 modules');

        $model->author_id = $modules['module_author']['mid'] ?? 0;
        $model->author_name = $modules['module_author']['name'] ?? '';
        $model->author_avatar = $modules['module_author']['face'] ?? '';

        $model->description =  $modules['module_dynamic']['desc']['text'] ?? '';

        $model->comment_count =  $modules['module_stat']['comment']['count'] ?? 0;
        $model->forward_count =  $modules['module_stat']['forward']['count'] ?? 0;
        $model->like_count =  $modules['module_stat']['like']['count'] ?? 0;

        //从动态详情中提取 评论区ID 和 评论类型
        $model->comment_area_id = $dynamic_data['item']['basic']['comment_id_str'] ?? null;
        $model->comment_type = $dynamic_data['item']['basic']['comment_type'] ?? null;

        $model->source_type = static::SOURCE_TYPE_DYNAMIC;

        //如果无法提取到数据
        throw_exception_if_is_null($model->comment_area_id, '评论区ID 获取失败');
        throw_exception_if_is_null($model->comment_type, '评论类型 获取失败');

        return $model;
    }
}
