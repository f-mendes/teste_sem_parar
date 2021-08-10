<?php

class MainForm
{
    private $html;
    private $data;

    public function __construct()
    {
        $this->html = file_get_contents('view/form.html');


    }

    public function edit($param)
    {
        try
        {
            $id = (int) $param['id'];
            //$this->data = Pessoa::find($id);
        }
        catch (Exception $e)
        {
            print $e->getMessage();
        }
    }

    public function save($param)
    {
        try
        {
            //Pessoa::save($param);
            $this->data = $param;

        }
        catch (Exception $e)
        {
            print $e->getMessage();
        }
    }


    public function show()
    {

        print $this->html;
    }
}